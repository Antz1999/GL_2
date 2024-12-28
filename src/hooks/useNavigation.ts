import { useState } from 'react';

export function useNavigation() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const navigateToPage = (pageId: string) => {
    setCurrentPage(pageId);
  };

  const navigateToHome = () => {
    setCurrentPage('home');
  };

  return {
    currentPage,
    navigateToPage,
    navigateToHome,
  };
}