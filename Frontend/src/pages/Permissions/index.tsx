import React from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import SubmitButton from "../../atoms/SubmitButton";
import Snackbar from "../../atoms/Snackbar";

import PageContent from "../../molecules/PageContent";

import Yup from "../../libraries/yup";
import { Edit } from "../../libraries/mui/icons";
import {
  Table, TableHead, TableBody, TableRow, TableCell,
  IconButton, Dialog, DialogTitle, FormControl,
  InputLabel, Select, MenuItem, FormHelperText
} from "../../libraries/mui/components";

import { handleErrorMessage } from "../../helpers/utils";

import api from "../../services/api";

import * as Styled from "./styles";

interface IFormInputs {
  permission: string
}

const schema = Yup.object().shape({
  permission: Yup.string().required()
});

const Permissions: React.FC = () => {

  const [open, setOpen] = React.useState(false);
  const [users, setUsers] = React.useState<any[]>([]);
  const [currentUser, setCurrentUser] = React.useState<any>({});
  const [permissions, setPermissions] = React.useState<any[]>([]);
  const [permissionChanged, setPermissionChanged] = React.useState(false);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const {
    control, setValue, handleSubmit, formState: { errors: formErrors }, reset
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    reValidateMode: "onChange",
    mode: "onBlur"
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleEditButtonClick = (user: any) => {
    setCurrentUser(user);
    setOpen(true);
    setValue("permission", user.permissionGroup);
  };

  const handlePermissionChange = (newValue: string) => {
    setValue("permission", newValue);
  };

  const handleSubmitForm: SubmitHandler<IFormInputs> = async (data: IFormInputs) => {
    const { permission } = data;
    const { id } = currentUser;

    try {
      await api.patch(`/users/${id}`, { permissionGroup: permission });
      setOpen(false);
      reset();
      setPermissionChanged(true);
    } catch (error) {
      setPermissionChanged(false);
    } finally {
      setSnackbarOpen(true);
    }
  };

  React.useEffect(() => {
    (async () => {
      const { data: usersData } = await api.get("/users");
      const { data: permissionsData } = await api.get("/permission-groups");

      const usersWithPermissionGroupName = usersData.map((user: any) => (
        {
          ...user,
          permissionGroupName: permissionsData.find(
            (permission: any) => permission.id === user.permissionGroup
          ).name
        }));

      setUsers(usersWithPermissionGroupName);
      setPermissions(permissionsData);
    })();
  }, [open]);

  return (
    <PageContent title="Permissões">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Número</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="left">Colaborador</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="left">Permissão</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right" />
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={user.email}>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="left">{user.name}</TableCell>
              <TableCell align="left">{user.permissionGroupName}</TableCell>
              <TableCell align="right">
                <IconButton onClick={() => handleEditButtonClick(user)}>
                  <Edit fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog
        onClose={handleClose}
        open={open}
      >
        <DialogTitle>Selecione a permissão desejada</DialogTitle>
        <Styled.FormContainer
          onSubmit={handleSubmit(handleSubmitForm)}
        >
          <Controller
            name="permission"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormControl error={!!formErrors.permission} className="field" sx={{ width: "200px" }}>
                <InputLabel id="permission-select">Permissão</InputLabel>
                <Select
                  {...field}
                  labelId="permission-select"
                  label="Permissão"
                  error={!!formErrors.permission}
                  onChange={(e) => handlePermissionChange(e.target.value)}
                >
                  {permissions.map((permission) => (
                    <MenuItem key={permission.id} value={permission.id}>
                      {permission.name}
                    </MenuItem>
                  ))}
                </Select>
                {!!formErrors.permission
                  && (
                  <FormHelperText>
                    {
                  handleErrorMessage(formErrors.permission)
}
                  </FormHelperText>
                  )}
              </FormControl>
            )}
          />
          <SubmitButton text="Confirmar" />
        </Styled.FormContainer>
      </Dialog>
      <Snackbar
        open={snackbarOpen}
        message={permissionChanged ? "Permissão alterada com sucesso!" : "Erro ao alterar permissão"}
        onClose={() => setSnackbarOpen(false)}
        severity={permissionChanged ? "success" : "error"}
      />
    </PageContent>
  );
};

export default Permissions;
