import {FINALIZE, RESULT, TESTS} from "./paths";
import Dashboard from "./Dashboard";
import DashboardResults from "./DashboardResults";
import DashboardFinalize from "./DashboardFinalize";

export const publicRoutes = [
    {
        path: TESTS,
        Component: Dashboard
    },
    {
        path: RESULT + '/:testId',
        Component: DashboardResults
    },
    {
        path: FINALIZE + '/:testId',
        Component: DashboardFinalize
    }
]