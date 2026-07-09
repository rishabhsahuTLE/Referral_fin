import React, { useState } from 'react';
import { FiFlag, FiAlertCircle } from 'react-icons/fi';
import DateRangeFilter from '../components/DateRangeFilter';
import SortBy from '../components/SortBy';
import './ReferralPayouts.css';

function ReferralPayouts({ university }) {
  const [activeTab, setActiveTab] = useState('urgent');
  const [flaggedItems, setFlaggedItems] = useState(new Set());
  const [expandedDescriptions, setExpandedDescriptions] = useState(new Set());
  const [sortBy, setSortBy] = useState('date-newest');
  const [dateRange, setDateRange] = useState(null);

  const calculateDaysAgo = (daysBack) => {
    const date = new Date();
    date.setDate(date.getDate() - daysBack);
    return date.toLocaleDateString('en-IN');
  };

  const mockData = [
    {
      id: 1,
      student: 'Aditya Verma',
      referrer: 'Rahul Sharma',
      course: 'B.Tech CSE',
      enrolledDate: calculateDaysAgo(29),
      enrolledDateObj: new Date(new Date().setDate(new Date().getDate() - 29)),
      daysAgo: 29,
      amount: '₹5,000',
      amountValue: 5000,
      stage: 'Doc Verification',
      isUrgent: true,
      description: 'Documents pending since 25th May. Student has not submitted updated address proof.',
      bankDetails: 'Aditya Verma',
    },
    {
      id: 2,
      student: 'Rajesh Pillai',
      referrer: 'Sneha Patel',
      course: 'B.Com',
      enrolledDate: calculateDaysAgo(22),
      enrolledDateObj: new Date(new Date().setDate(new Date().getDate() - 22)),
      daysAgo: 22,
      amount: '₹3,000',
      amountValue: 3000,
      stage: 'Bank Verification',
      isUrgent: false,
      description: 'Bank details verification in progress. Waiting for bank confirmation.',
      bankDetails: 'Rajesh Kumar',
    },
    {
      id: 3,
      student: 'Pradeep Nair',
      referrer: 'Priya Mehta',
      course: 'MBA Finance',
      enrolledDate: calculateDaysAgo(15),
      enrolledDateObj: new Date(new Date().setDate(new Date().getDate() - 15)),
      daysAgo: 15,
      amount: '₹5,000',
      amountValue: 5000,
      stage: 'Payment Pending',
      isUrgent: false,
      description: '',
      bankDetails: 'Pradeep Nair',
    },
    {
      id: 4,
      student: 'Sarah Khan',
      referrer: 'Amit Singh',
      course: 'B.Sc Data Science',
      enrolledDate: calculateDaysAgo(8),
      enrolledDateObj: new Date(new Date().setDate(new Date().getDate() - 8)),
      daysAgo: 8,
      amount: '₹4,500',
      amountValue: 4500,
      stage: 'Doc Verification',
      isUrgent: false,
      description: '',
      bankDetails: 'Sarah Khan',
    },
    {
      id: 5,
      student: 'Vikram Singh',
      referrer: 'Neha Gupta',
      course: 'B.Tech AI/ML',
      enrolledDate: calculateDaysAgo(35),
      enrolledDateObj: new Date(new Date().setDate(new Date().getDate() - 35)),
      daysAgo: 35,
      amount: '₹6,000',
      amountValue: 6000,
      stage: 'Bank Verification',
      isUrgent: true,
      description: 'Bank account mismatch with PAN details. Awaiting student correction.',
      bankDetails: 'Vikram Kumar Singh',
    },
  ];

  const filterDataForTable = () => {
    let filtered = mockData;

    switch (activeTab) {
      case 'urgent':
        filtered = filtered.filter((item) => item.isUrgent);
        break;
      case 'docVerification':
        filtered = filtered.filter((item) => item.stage === 'Doc Verification');
        break;
      case 'bankVerification':
        filtered = filtered.filter((item) => item.stage === 'Bank Verification');
        break;
      case 'paymentPending':
        filtered = filtered.filter((item) => item.stage === 'Payment Pending');
        break;
      case 'all':
      default:
        break;
    }

    if (dateRange && dateRange.startDate && dateRange.endDate) {
      filtered = filtered.filter((item) => {
        const itemDate = item.enrolledDateObj;
        return itemDate >= dateRange.startDate && itemDate <= dateRange.endDate;
      });
    }

    filtered = sortData(filtered);
    return filtered;
  };

  const filterDataForStats = () => {
    let filtered = [...mockData];

    if (dateRange && dateRange.startDate && dateRange.endDate) {
      filtered = filtered.filter((item) => {
        const itemDate = item.enrolledDateObj;
        return itemDate >= dateRange.startDate && itemDate <= dateRange.endDate;
      });
    }

    return filtered;
  };

  const sortData = (data) => {
    const dataCopy = [...data];

    switch (sortBy) {
      case 'date-newest':
        return dataCopy.sort((a, b) => b.enrolledDateObj - a.enrolledDateObj);
      case 'date-oldest':
        return dataCopy.sort((a, b) => a.enrolledDateObj - b.enrolledDateObj);
      case 'amount-high':
        return dataCopy.sort((a, b) => b.amountValue - a.amountValue);
      case 'amount-low':
        return dataCopy.sort((a, b) => a.amountValue - b.amountValue);
      case 'name-asc':
        return dataCopy.sort((a, b) => a.student.localeCompare(b.student));
      case 'name-desc':
        return dataCopy.sort((a, b) => b.student.localeCompare(a.student));
      case 'stage':
        return dataCopy.sort((a, b) => a.stage.localeCompare(b.stage));
      case 'urgent':
        return dataCopy.sort((a, b) => (b.isUrgent ? 1 : 0) - (a.isUrgent ? 1 : 0));
      default:
        return dataCopy;
    }
  };

  const calculateStats = () => {
    const statsData = filterDataForStats();

    const totalDue = statsData.reduce((sum, item) => sum + item.amountValue, 0);
    const bankIssues = statsData.filter((item) => item.stage === 'Bank Verification').length;
    const pendingVerification = statsData.filter(
      (item) => item.stage === 'Doc Verification'
    ).length;

    const now = new Date();
    const currentMonth = now.toLocaleString('en-IN', { month: 'long', year: 'numeric' });

    return {
      totalDue: `₹${totalDue.toLocaleString('en-IN')}`,
      thisMonth: currentMonth,
      bankIssues,
      pendingVerification,
    };
  };

  const getStageColor = (stage) => {
    switch (stage) {
      case 'Doc Verification':
        return '#ffa500';
      case 'Bank Verification':
        return '#4169e1';
      case 'Payment Pending':
        return '#32cd32';
      default:
        return '#808080';
    }
  };

  const toggleFlag = (id) => {
    const newFlagged = new Set(flaggedItems);
    if (newFlagged.has(id)) {
      newFlagged.delete(id);
    } else {
      newFlagged.add(id);
    }
    setFlaggedItems(newFlagged);
  };

  const toggleDescription = (id) => {
    const newExpanded = new Set(expandedDescriptions);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedDescriptions(newExpanded);
  };

  const tableData = filterDataForTable();
  const stats = calculateStats();

  return (
    <div className="referral-payouts">
      {/* TOP ROW: title + controls */}
      <div className="page-header-row">
        <h1 className="page-title">
          Referral Payouts
          {university && <span className="university-name"> - {university}</span>}
        </h1>
        <div className="header-controls">
          <DateRangeFilter onDateRangeChange={setDateRange} />
          <SortBy onSortChange={setSortBy} />
        </div>
      </div>

      {/* STAT TILES ROW */}
      <div className="header-stats">
        <div className="stat-box">
          <label>Total Due</label>
          <span className="stat-amount">{stats.totalDue}</span>
          <p>Amount</p>
        </div>
        <div className="stat-box">
          <label>This Month</label>
          <span className="stat-amount">{stats.totalDue}</span>
          <p>{stats.thisMonth}</p>
        </div>
        <div className="stat-box urgent-stat">
          <label>Bank Issues</label>
          <span className="stat-amount">{stats.bankIssues}</span>
          <p>Pending verification</p>
        </div>
        <div className="stat-box">
          <label>Pending Verification</label>
          <span className="stat-amount">{stats.pendingVerification}</span>
          <p>Sort to upload</p>
        </div>
      </div>

      {/* TABS */}
      <div className="tabs-container">
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'urgent' ? 'active' : ''}`}
            onClick={() => setActiveTab('urgent')}
          >
            <FiAlertCircle size={16} /> Urgent
          </button>
          <button
            className={`tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All
          </button>
          <button
            className={`tab ${activeTab === 'docVerification' ? 'active' : ''}`}
            onClick={() => setActiveTab('docVerification')}
          >
            Doc Verification
          </button>
          <button
            className={`tab ${activeTab === 'bankVerification' ? 'active' : ''}`}
            onClick={() => setActiveTab('bankVerification')}
          >
            Bank Verification
          </button>
          <button
            className={`tab ${activeTab === 'paymentPending' ? 'active' : ''}`}
            onClick={() => setActiveTab('paymentPending')}
          >
            Payment Pending
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>STUDENT</th>
              <th>REFERRER</th>
              <th>COURSE</th>
              <th>ENROLLED ON</th>
              <th>BANK DETAILS</th>
              <th>AMOUNT</th>
              <th>STAGE</th>
              <th>DESCRIPTION & FLAG</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <tr
                key={item.id}
                className={`table-row ${item.isUrgent ? 'urgent-row' : ''}`}
              >
                <td className="student-name">{item.student}</td>
                <td className="referrer-name">{item.referrer}</td>
                <td className="course-name">{item.course}</td>
                <td className="enrolled-date">
                  {item.enrolledDate}
                  <br />
                  <small>{item.daysAgo} days ago</small>
                </td>
                <td className="bank-details">{item.bankDetails}</td>
                <td className="amount">{item.amount}</td>
                <td className="stage-cell">
                  <span
                    className="stage-badge"
                    style={{
                      backgroundColor: getStageColor(item.stage),
                      color: 'white',
                    }}
                  >
                    {item.stage}
                  </span>
                </td>
                <td className="description-cell">
                  <div className="description-wrapper">
                    {item.description && (
                      <>
                        <button
                          className="expand-btn"
                          onClick={() => toggleDescription(item.id)}
                          title="View description"
                        >
                          📝
                        </button>
                        {expandedDescriptions.has(item.id) && (
                          <div className="description-popup">
                            {item.description}
                          </div>
                        )}
                      </>
                    )}
                    <button
                      className={`flag-btn ${flaggedItems.has(item.id) ? 'flagged' : ''}`}
                      onClick={() => toggleFlag(item.id)}
                      title="Flag this item"
                    >
                      <FiFlag size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="records-count">{tableData.length} records</div>
    </div>
  );
}

export default ReferralPayouts;
