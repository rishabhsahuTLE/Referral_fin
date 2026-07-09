import React from 'react';
import { FiChevronDown, FiExternalLink } from 'react-icons/fi';
import './Sidebar.css';

function Sidebar({
  currentPage,
  setCurrentPage,
  universities,
  selectedUniversity,
  setSelectedUniversity,
}) {
  const [showUniversityDropdown, setShowUniversityDropdown] = React.useState(false);

  const handleAdminClick = () => {
    window.location.href = 'https://referral-admin-zn23.vercel.app/';
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="university-selector">
          <button
            className="university-button"
            onClick={() => setShowUniversityDropdown(!showUniversityDropdown)}
          >
            <span>{selectedUniversity}</span>
            <FiChevronDown size={18} />
          </button>
          {showUniversityDropdown && (
            <div className="university-dropdown">
              {universities.map((uni) => (
                <button
                  key={uni}
                  className={`dropdown-item ${selectedUniversity === uni ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedUniversity(uni);
                    setShowUniversityDropdown(false);
                  }}
                >
                  {uni}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <nav className="sidebar-nav">
        <button
          className={`nav-item ${currentPage === 'referral-payouts' ? 'active' : ''}`}
          onClick={() => setCurrentPage('referral-payouts')}
        >
          Referral Payouts
        </button>
        <button
          className={`nav-item ${currentPage === 'payment-history' ? 'active' : ''}`}
          onClick={() => setCurrentPage('payment-history')}
        >
          Payment History
        </button>
        <button
          className={`nav-item ${currentPage === 'reports' ? 'active' : ''}`}
          onClick={() => setCurrentPage('reports')}
        >
          Reports
        </button>
      </nav>

      {/* Bottom section — mirrors the 4th image layout but with Finance/Admin swapped */}
      <div className="sidebar-bottom">
        {/* Admin (was Finance) */}
        <button className="sidebar-bottom-item admin-item" onClick={handleAdminClick}>
          <div className="sidebar-bottom-avatar admin-avatar">AD</div>
          <div className="sidebar-bottom-text">
            <span className="sidebar-bottom-label">Admin</span>
            <span className="sidebar-bottom-sub">
              Switch view <FiExternalLink size={11} />
            </span>
          </div>
        </button>

        {/* Finance (was Admin) */}
        <div className="sidebar-bottom-item finance-item">
          <div className="sidebar-bottom-avatar finance-avatar">FN</div>
          <div className="sidebar-bottom-text">
            <span className="sidebar-bottom-label">Finance</span>
            <span className="sidebar-bottom-sub finance-status">
              <span className="status-dot" /> App Support · Active
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
