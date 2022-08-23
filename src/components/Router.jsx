import { useMemo } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MainPage from '../pages/ProfilePage';
import Header from './Header';

const OrtherBlogName = () => {
  return (
    <div className="flex flex-row items-center">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        ></path>
      </svg>
      sera
    </div>
  );
};

const AppRouter = () => {
  const { pathname } = useLocation();
  const blogName = useMemo(() => {
    return pathname === '/' ? 'velog_test' : <OrtherBlogName />;
  }, [pathname]);

  return (
    <>
      <Header blogName={blogName} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main" element={<MainPage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
};

export default AppRouter;
