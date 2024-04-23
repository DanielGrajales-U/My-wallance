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
  BackIcon,
  DateHistory,
  Description,
  MoreDetails,
} from '../../../Styles/UI-Wallance';
import { useHistory, useTransaction } from '../../../Hooks';
import { Loader, TrashSvgComponent } from '../../../Components';
import Pagination from '../../../Components/Pagination/Pagination';

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
              <BackIcon
                xmlns='http://www.w3.org/2000/svg'
                height='45'
                viewBox='0 -960 960 960'
                width='45'
                fill='#ffffff99'
              >
                <path d='m259.675-440.891 128.543 129.108q11.326 11.826 11.076 27.033t-11.576 27.033q-11.827 11.826-27.783 11.826-15.957 0-27.783-11.826l-194-193.935q-6.079-5.724-9.235-12.884-3.157-7.161-3.157-14.66 0-7.5 3.157-14.482 3.156-6.983 9.235-13.17l195.5-194.935q11.326-11.326 27.283-11.326 15.956 0 27.783 11.826 11.326 11.826 11.076 27.533t-11.576 27.033L258.675-516.609h513.738V-649q0-16.207 11.251-27.408 11.252-11.201 27.484-11.201 15.732 0 27.14 11.201 11.408 11.201 11.408 27.408v131.391q0 32.163-22.396 54.441-22.397 22.277-54.887 22.277H259.675Z' />
              </BackIcon>
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
