import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../Context';
import { PrivateRoutes, UserContextType } from '../../../Interfaces';
import { useTransaction, useUser } from '../../../Hooks';
import { convertAmountToNumber } from '../../../Utils';
import { Link } from 'react-router-dom';
import { validateTransaction } from '../../../Validators';
import ErrorContext from '../../../Context/error.context';
import { ErrorContextType } from '../../../Interfaces/error';
import { ShowError } from '../../../Components';
import { CardContent, NavWallance, WallanceSection } from '../../../Styles/UI-Layouts';
import {
  AmountLabelForm,
  InputAmount,
  InputDescription,
  InputGroup,
  SubmitButton,
} from '../../../Styles/UI-Components';
import { AmountShow, BackButton, BackIcon, HistoryIcon, UserNameShow } from '../../../Styles/UI-Wallance';

export default function Wallance() {
  const { user } = useContext(UserContext) as UserContextType;
  const { errors, setErrors } = useContext(ErrorContext) as ErrorContextType;
  const { handleLogout } = useUser();
  const { createTrans } = useTransaction();

  useEffect(() => {
    setErrors([]);
  }, []);

  const [formData, setFormData] = useState({
    amount: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = convertAmountToNumber(formData);
    const valid = validateTransaction(data);
    if (valid.length > 0) {
      setErrors(valid);
      return;
    }
    createTrans(data);
  };

  return (
    <WallanceSection>
      <CardContent>
        <NavWallance>
          <BackButton onClick={handleLogout}>
            <BackIcon
              xmlns='http://www.w3.org/2000/svg'
              height='45'
              viewBox='0 -960 960 960'
              width='45'
              fill='#ffffff99'
            >
              <path d='m259.675-440.891 128.543 129.108q11.326 11.826 11.076 27.033t-11.576 27.033q-11.827 11.826-27.783 11.826-15.957 0-27.783-11.826l-194-193.935q-6.079-5.724-9.235-12.884-3.157-7.161-3.157-14.66 0-7.5 3.157-14.482 3.156-6.983 9.235-13.17l195.5-194.935q11.326-11.326 27.283-11.326 15.956 0 27.783 11.826 11.326 11.826 11.076 27.533t-11.576 27.033L258.675-516.609h513.738V-649q0-16.207 11.251-27.408 11.252-11.201 27.484-11.201 15.732 0 27.14 11.201 11.408 11.201 11.408 27.408v131.391q0 32.163-22.396 54.441-22.397 22.277-54.887 22.277H259.675Z' />
            </BackIcon>
          </BackButton>
          <Link to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.HISTORY}`} replace>
            <HistoryIcon
              xmlns='http://www.w3.org/2000/svg'
              height='45'
              viewBox='0 -960 960 960'
              width='45'
              fill='#FFFFFF99'
            >
              <path d='M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z' />
            </HistoryIcon>
          </Link>
        </NavWallance>
        <UserNameShow>{user?.userName}</UserNameShow>
        <AmountShow>{user?.amount},00</AmountShow>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <AmountLabelForm htmlFor='amount'>Cantidad</AmountLabelForm>
            <InputAmount
              onChange={handleChange}
              name='amount'
              type='text'
              placeholder='0.00'
              id='amount'
            />
            <InputDescription
              onChange={handleChange}
              name='description'
              type='text'
              placeholder='Description'
            />
            <ShowError errors={errors} />
            <SubmitButton type='submit'>Hacer transacción</SubmitButton>
          </InputGroup>
        </form>
      </CardContent>
    </WallanceSection>
  );
}
