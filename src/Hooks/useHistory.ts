import { useContext, useEffect, useState } from 'react'
import { objectHistory, UserContextType } from '../Interfaces';
import historyService from '../Services/Wallance/history';
import { UserContext } from '../Context';

export default function useHistory() {
  const {user} = useContext(UserContext) as UserContextType
  const [history, setHistory] = useState<objectHistory[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getHistory = async () => {
      const response = await historyService(user?.token);
      setHistory(response.data.docs);
      setIsLoading(false);
    };
    getHistory();
  }, [user?.token]);

  return {
    history,
    isLoading
  }
}
