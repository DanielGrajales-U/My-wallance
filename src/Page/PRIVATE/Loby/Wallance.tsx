import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../Context';
import { PrivateRoutes, UserContextType } from '../../../Interfaces';
import { useTransaction, useUser } from '../../../Hooks';
import { convertAmountToNumber } from '../../../Utils';
import { Link } from 'react-router-dom';
import { validateTransaction } from '../../../Validators';
import ErrorContext from '../../../Context/error.context';
import { ErrorContextType } from '../../../Interfaces/error';
import { HistorySvgComponent, ShowError } from '../../../Components';
import { CardContent, NavWallance, WallanceSection } from '../../../Styles/UI-Layouts';
import {
  AmountLabelForm,
  InputAmount,
  InputDescription,
  InputGroup,
  SubmitButton,
} from '../../../Styles/UI-Components';
import { AmountShow, BackButton, UserNameShow } from '../../../Styles/UI-Wallance';
import BackSvgComponent from '../../../Components/Svg/BackSvgComponent';
import useSEO from '../../../Hooks/useSeo';

export default function Wallance() {
  useSEO({
    title: 'Balance',
    description: 'Wallance',
  })
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
            <BackSvgComponent />
          </BackButton>
          <Link to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.HISTORY}`} replace>
            <HistorySvgComponent />
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
            {errors.length > 0 ? <ShowError error={errors[0]} /> : null}
            <SubmitButton type='submit'>Hacer transacción</SubmitButton>
          </InputGroup>
        </form>
      </CardContent>
    </WallanceSection>
  );
}
