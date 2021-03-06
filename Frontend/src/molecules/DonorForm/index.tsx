/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

import ptBrLocale from "date-fns/locale/pt-BR";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import Snackbar from "../../atoms/Snackbar";
import SubmitButton from "../../atoms/SubmitButton";
import NumberFormatCustom from "../../atoms/NumberFormat";

import Yup from "../../libraries/yup";
import { AdapterDateFns, DatePicker, LocalizationProvider } from "../../libraries/mui/lab";

import { handleErrorMessage } from "../../helpers/utils";

import api from "../../services/api";

import {
  TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText
} from "../../libraries/mui/components";

import * as Styled from "./styles";

interface IFormInputs {
  valor: number;
  frequencia: string;
  melhorData: number;
  nome: string;
  telefone: string;
  cep: string;
  endereco: string;
  numeroEndereco: string;
  cidade: string;
  uf: string;
  bairro: string;
  setor: string;
  complemento: string;
  dataNascimento: Date | null;
  cpf: string;
  rg: string;
  inicioDoacao: Date | null;
  observacoes: string;
  inativo: boolean;
}

const schema = Yup.object().shape({
  valor: Yup.number().required(),
  frequencia: Yup.string().required(),
  melhorData: Yup.number().min(1).max(31).required(),
  nome: Yup.string().required(),
  telefone: Yup.string().required().min(10).max(11),
  cep: Yup.string().required(),
  endereco: Yup.string().required(),
  numeroEndereco: Yup.string().required(),
  cidade: Yup.string().required(),
  uf: Yup.string().required(),
  bairro: Yup.string().required(),
  setor: Yup.string().required(),
  complemento: Yup.string(),
  dataNascimento: Yup.date().required().nullable(),
  cpf: Yup.string(),
  rg: Yup.string(),
  inicioDoacao: Yup.date().required().nullable(),
  observacoes: Yup.string(),
  inativo: Yup.boolean()
});

const DonorForm: React.FC = () => {

  const [donorRegistered, setDonorRegistered] = React.useState(false);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const {
    control, setValue, handleSubmit, formState: { errors: formErrors }, reset
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    reValidateMode: "onChange",
    mode: "onBlur"
  });

  const handleFrequencyChange = (newValue: string) => {
    setValue("frequencia", newValue);
  };

  const handleSubmitForm: SubmitHandler<IFormInputs> = async (formData: IFormInputs) => {
    try {
      const newDonor = { ...formData };

      await api.post("/donors", newDonor);

      setDonorRegistered(true);
      reset();

    } catch (error) {
      setDonorRegistered(false);

    } finally {
      setSnackbarOpen(true);
    }
  };

  return (
    <Styled.Container>
      <span>Cadastro de doador</span>
      <Styled.Form onSubmit={handleSubmit(handleSubmitForm)}>
        <Styled.FormFields>
          <Controller
            name="valor"
            control={control}
            defaultValue={0}
            render={({ field }) => (
              <TextField
                {...field}
                autoComplete="off"
                label="Valor"
                variant="outlined"
                error={!!formErrors.valor}
                helperText={handleErrorMessage(formErrors.valor)}
                InputProps={{
                  inputComponent: NumberFormatCustom as any
                }}
                className="field"
                sx={{ width: "50px" }}
              />
            )}
          />
          <Controller
            name="frequencia"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormControl error={!!formErrors.frequencia} className="field" sx={{ width: "100px" }}>
                <InputLabel id="frequency-select">Frequ??ncia</InputLabel>
                <Select
                  {...field}
                  labelId="frequency-select"
                  label="Frequ??ncia"
                  error={!!formErrors.frequencia}
                  onChange={(e) => handleFrequencyChange(e.target.value)}
                >
                  <MenuItem value="SEMANAL">Semanal</MenuItem>
                  <MenuItem value="QUINZENAL">Quinzenal</MenuItem>
                  <MenuItem value="MENSAL">Mensal</MenuItem>
                  <MenuItem value="BIMENSAL">Bimensal</MenuItem>
                </Select>
                {!!formErrors.frequencia
                  && <FormHelperText>{handleErrorMessage(formErrors.frequencia)}</FormHelperText>}
              </FormControl>
            )}
          />
          <Controller
            name="melhorData"
            control={control}
            defaultValue={1}
            render={({ field }) => (
              <TextField
                {...field}
                autoComplete="off"
                label="Melhor data"
                variant="outlined"
                error={!!formErrors.melhorData}
                helperText={handleErrorMessage(formErrors.melhorData)}
                className="field"
                type="number"
                sx={{ width: "100px" }}
              />
            )}
          />
          <Controller
            name="nome"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                autoComplete="off"
                label="Nome"
                variant="outlined"
                error={!!formErrors.nome}
                helperText={handleErrorMessage(formErrors.nome)}
                className="field"
                sx={{ width: "400px" }}
              />
            )}
          />
          <Controller
            name="telefone"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                autoComplete="off"
                label="Telefone"
                variant="outlined"
                error={!!formErrors.telefone}
                type="tel"
                helperText={handleErrorMessage(formErrors.telefone)}
                inputProps={{ maxLength: 11 }}
                className="field"
                sx={{ width: "50px" }}
              />
            )}
          />
          <Controller
            name="cep"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                autoComplete="off"
                label="CEP"
                variant="outlined"
                error={!!formErrors.cep}
                helperText={handleErrorMessage(formErrors.cep)}
                className="field"
                sx={{ width: "50px" }}
              />
            )}
          />
          <Controller
            name="endereco"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                autoComplete="off"
                label="Endere??o"
                variant="outlined"
                error={!!formErrors.endereco}
                helperText={handleErrorMessage(formErrors.endereco)}
                className="field"
                sx={{ width: "500px" }}
              />
            )}
          />
          <Controller
            name="numeroEndereco"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                autoComplete="off"
                label="N??mero"
                variant="outlined"
                error={!!formErrors.numeroEndereco}
                helperText={handleErrorMessage(formErrors.numeroEndereco)}
                className="field"
                sx={{ width: "50px" }}
              />
            )}
          />
          <Controller
            name="cidade"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                autoComplete="off"
                label="Cidade"
                variant="outlined"
                error={!!formErrors.cidade}
                helperText={handleErrorMessage(formErrors.cidade)}
                className="field"
                sx={{ width: "350px" }}
              />
            )}
          />
          <Controller
            name="uf"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                autoComplete="off"
                label="UF"
                variant="outlined"
                error={!!formErrors.uf}
                helperText={handleErrorMessage(formErrors.uf)}
                inputProps={{ maxLength: 2 }}
                className="field"
                sx={{ width: "50px" }}
              />
            )}
          />
          <Controller
            name="bairro"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                autoComplete="off"
                label="Bairro"
                variant="outlined"
                error={!!formErrors.bairro}
                helperText={handleErrorMessage(formErrors.bairro)}
                className="field"
              />
            )}
          />
          <Controller
            name="setor"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                autoComplete="off"
                label="Setor"
                variant="outlined"
                error={!!formErrors.setor}
                helperText={handleErrorMessage(formErrors.setor)}
                className="field"
              />
            )}
          />
          <Controller
            name="complemento"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                autoComplete="off"
                label="Complemento"
                variant="outlined"
                error={!!formErrors.complemento}
                helperText={handleErrorMessage(formErrors.complemento)}
                className="field"
              />
            )}
          />
          <Controller
            name="dataNascimento"
            control={control}
            defaultValue={null}
            render={({ field: { onChange, value } }) => (
              <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBrLocale}>
                <DatePicker
                  value={value}
                  label="Data de nascimento"
                  onChange={(newDate) => onChange(newDate)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      error={!!formErrors.dataNascimento}
                      helperText={handleErrorMessage(formErrors.dataNascimento)}
                      className="field"
                      sx={{ width: "200px" }}
                    />
                  )}
                />
              </LocalizationProvider>
            )}
          />
          <Controller
            name="cpf"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                autoComplete="off"
                label="CPF"
                variant="outlined"
                error={!!formErrors.cpf}
                helperText={handleErrorMessage(formErrors.cpf)}
                className="field"
              />
            )}
          />
          <Controller
            name="rg"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                autoComplete="off"
                label="RG"
                variant="outlined"
                error={!!formErrors.rg}
                helperText={handleErrorMessage(formErrors.rg)}
                className="field"
                sx={{ width: "150px" }}
              />
            )}
          />
          <Controller
            name="inicioDoacao"
            control={control}
            defaultValue={null}
            render={({ field: { onChange, value } }) => (
              <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBrLocale}>
                <DatePicker
                  label="In??cio da doa????o"
                  value={value}
                  onChange={(ndate) => onChange(ndate)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      error={!!formErrors.inicioDoacao}
                      helperText={handleErrorMessage(formErrors.inicioDoacao)}
                      className="field"
                      sx={{ width: "200px" }}
                    />
                  )}
                />
              </LocalizationProvider>
            )}
          />
          <Controller
            name="observacoes"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                autoComplete="off"
                label="Observa????es"
                variant="outlined"
                error={!!formErrors.observacoes}
                helperText={handleErrorMessage(formErrors.observacoes)}
                className="field"
              />
            )}
          />
        </Styled.FormFields>
        <SubmitButton text="Confirmar" />
      </Styled.Form>
      <Snackbar
        open={snackbarOpen}
        message={donorRegistered ? "Doador criado com sucesso!" : "Erro ao criar doador"}
        onClose={() => setSnackbarOpen(false)}
        severity={donorRegistered ? "success" : "error"}
      />
    </Styled.Container>
  );
};

export default DonorForm;
