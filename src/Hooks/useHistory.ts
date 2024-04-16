import { useContext, useEffect, useState } from 'react'
import { objectHistory, UserContextType } from '../Interfaces';
import historyService from '../Services/Wallance/history';
import { UserContext } from '../Context';

export default function useHistory() {
  const {user} = useContext(UserContext) as UserContextType
  const [history, setHistory] = useState<objectHistory[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  useEffect(() => {
    const getHistory = async () => {
      const response = await historyService(user?.token, pageNumber);
      setHistory(response.data.docs);
      const totalDocs = Math.ceil(response.data.totalDocs / 6)
      setTotalPages(totalDocs);
      setIsLoading(false);
    };
    getHistory();
  }, [user?.token, pageNumber]);

  return {
    history,
    isLoading,
    totalPages,
    setPageNumber
  }
}
