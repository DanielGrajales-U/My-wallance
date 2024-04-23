import { PrivateRoutes } from '../../../Interfaces';
import formatDate from '../../../Utils/formatDate';
import { Link } from 'react-router-dom';
import {
  CardContent,
  HistoryContent,
  NavWallance,
  WallanceSection,
} from '../../../Styles/UI-Layouts';
import { SvgButton, TitleSesion } from '../../../Styles/UI-Components';
import {
  Ammount,
  DateHistory,
  Description,
  MoreDetails,
} from '../../../Styles/UI-Wallance';
import { useHistory, useTransaction } from '../../../Hooks';
import { Loader, TrashSvgComponent } from '../../../Components';
import Pagination from '../../../Components/Pagination/Pagination';
import {BackSvgComponent} from '../../../Components';

export default function History() {
  const { history, isLoading, totalPages, setPageNumber } = useHistory();
  const { deleteTransaction } = useTransaction();
  const currentPage = 1;

  const handlePageChange = (page) => {
    setPageNumber(page);
  };

  return (
    <WallanceSection>
      {isLoading ? (
        <Loader />
      ) : (
        <CardContent>
          <NavWallance>
            <Link to={`/${PrivateRoutes.PRIVATE}`} replace>
              <BackSvgComponent />
            </Link>
          </NavWallance>
          <TitleSesion>History</TitleSesion>
          {history.map((item) => {
            const id = item._id;
            const formatedDate = formatDate(item.date);
            return (
              <HistoryContent key={id}>
                <DateHistory>{formatedDate}</DateHistory>
                <MoreDetails>
                  <Description>{item.description}</Description>
                  <Ammount className={`${item.amount < 0 ? 'negative' : 'positive'}`}>
                    {item.amount},00
                  </Ammount>
                </MoreDetails>
                <SvgButton onClick={() => deleteTransaction(id)}>
                  <TrashSvgComponent />
                </SvgButton>
              </HistoryContent>
            );
          })}
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </CardContent>
      )}
    </WallanceSection>
  );
}
