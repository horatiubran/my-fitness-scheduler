import { Routes, Route } from 'react-router-dom';
import {TabContent} from "../nav-bar/tab-content.jsx"
export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/monday" element={<TabContent content={<div>Monday Exercise</div>} />} />
            <Route path="/tuesday" element={<div>tueday Exercise</div>} />
            <Route path="/wednesday" element={<div>Monday Exercise</div>} />
            <Route path="/thursday" element={<div>Monday Exercise</div>} />
            <Route path="/friday" element={<div>Monday Exercise</div>} />
            <Route path="/summary" element={<div>Summary View</div>} />
        </Routes>
    );
};
