import { Route } from 'react-router-dom';
import '../Components/user_page_styles.scss';


const DashboardLayout = ({ children, ...rest }) => {
  return (
    <div>
        {children}
    </div>
  );
};

const DashboardLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <DashboardLayout>
          <Component {...props} />
        </DashboardLayout>
      )}
    />
  );
};

export default DashboardLayoutRoute;
