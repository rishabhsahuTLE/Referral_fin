import React, { useState } from 'react';
import './Reports.css';

function Reports({ university }) {
  const [activeTab, setActiveTab] = useState('monthly');

  const mockMonthlySummary = {
    yearToDate: '₹1,15,000',
    thisMonth: '₹19,167',
    lastMonth: '₹19,167',
    pastMonth: 'May 2026',
  };

  const mockMonthlyData = [
    {
      month: 'May 2026',
      amountPaid: '₹30,000',
      payouts: 6,
      bankIssues: 0,
      resolutionRate: '100%',
    },
    {
      month: 'Apr 2026',
      amountPaid: '₹25,000',
      payouts: 5,
      bankIssues: 1,
      resolutionRate: '80%',
    },
    {
      month: 'Feb 2026',
      amountPaid: '₹20,000',
      payouts: 4,
      bankIssues: 0,
      resolutionRate: '100%',
    },
    {
      month: 'Jan 2026',
      amountPaid: '₹15,000',
      payouts: 3,
      bankIssues: 1,
      resolutionRate: '67%',
    },
    {
      month: 'Jan 2026',
      amountPaid: '₹5,000',
      payouts: 2,
      bankIssues: 1,
      resolutionRate: '67%',
    },
    {
      month: 'Mar 2026',
      amountPaid: '₹10,000',
      payouts: 2,
      bankIssues: 2,
      resolutionRate: '0%',
    },
  ];

  const mockCourseData = [
    {
      course: 'MBA Marketing',
      university: 'Jama Hamdard University',
      enrolledReferrals: 5,
      totalDisbursed: '₹10,000',
      pendingDue: '₹5,000',
      paidVsPending: '50 paid',
    },
    {
      course: 'B.Tech CSE',
      university: 'Amrita Deemed University',
      enrolledReferrals: 0,
      totalDisbursed: '₹0',
      pendingDue: '₹0',
      paidVsPending: '0% paid',
    },
    {
      course: 'B.Com',
      university: 'Symbiosis International University',
      enrolledReferrals: 0,
      totalDisbursed: '₹0',
      pendingDue: '₹0',
      paidVsPending: '0% paid',
    },
    {
      course: 'MBA Finance',
      university: 'IITS Pilani',
      enrolledReferrals: 0,
      totalDisbursed: '₹0',
      pendingDue: '₹5,000',
      paidVsPending: '0% paid',
    },
    {
      course: 'B.Tech AI/ML',
      university: 'Jama Hamdard University',
      enrolledReferrals: 0,
      totalDisbursed: '₹0',
      pendingDue: '₹0',
      paidVsPending: '0% paid',
    },
    {
      course: 'B.Sc Data Science',
      university: 'Symbiosis International University',
      enrolledReferrals: 0,
      totalDisbursed: '₹0',
      pendingDue: '₹0',
      paidVsPending: '0% paid',
    },
  ];

  const renderMonthlySummary = () => (
    <div className="reports-container">
      <div className="summary-cards">
        <div className="card">
          <h4>Year to Date</h4>
          <p className="amount">{mockMonthlySummary.yearToDate}</p>
        </div>
        <div className="card">
          <h4>This Month</h4>
          <p className="amount">{mockMonthlySummary.thisMonth}</p>
        </div>
        <div className="card">
          <h4>Avg per Month</h4>
          <p className="amount">{mockMonthlySummary.lastMonth}</p>
        </div>
        <div className="card">
          <h4>Last Updated</h4>
          <p className="date">{mockMonthlySummary.pastMonth}</p>
        </div>
      </div>

      <div className="monthly-trend">
        <h3>Monthly Payout Trend</h3>
        <div className="trend-bars">
          {mockMonthlyData.map((item, idx) => (
            <div key={idx} className="trend-item">
              <div className="bar" style={{ height: `${Math.random() * 100}%` }}></div>
              <label>{item.month.split(' ')[0]}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="monthly-table">
        <h3>Monthly Analytics</h3>
        <table>
          <thead>
            <tr>
              <th>MONTH</th>
              <th>AMOUNT PAID</th>
              <th>PAYOUTS</th>
              <th>BANK ISSUES</th>
              <th>RESOLUTION RATE</th>
            </tr>
          </thead>
          <tbody>
            {mockMonthlyData.map((item, idx) => (
              <tr key={idx}>
                <td>{item.month}</td>
                <td className="amount">{item.amountPaid}</td>
                <td>{item.payouts}</td>
                <td>{item.bankIssues}</td>
                <td>
                  <span className="resolution-badge">{item.resolutionRate}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderCourseSummary = () => (
    <div className="reports-container">
      <div className="course-table">
        <h3>Course-wise Analytics</h3>
        <table>
          <thead>
            <tr>
              <th>COURSE</th>
              <th>UNIVERSITY</th>
              <th>ENROLLED REFERRALS</th>
              <th>TOTAL DISBURSED</th>
              <th>PENDING DUE</th>
              <th>PAID VS PENDING</th>
            </tr>
          </thead>
          <tbody>
            {mockCourseData.map((item, idx) => (
              <tr key={idx}>
                <td className="course-name">{item.course}</td>
                <td>{item.university}</td>
                <td>{item.enrolledReferrals}</td>
                <td className="amount">{item.totalDisbursed}</td>
                <td className="amount pending">{item.pendingDue}</td>
                <td>{item.paidVsPending}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="reports">
      <div className="page-header">
        <h1>Reports - {university}</h1>
        <p className="header-subtitle">Monthly summaries and course-wise payout analytics</p>
      </div>

      <div className="report-tabs">
        <button
          className={`report-tab ${activeTab === 'monthly' ? 'active' : ''}`}
          onClick={() => setActiveTab('monthly')}
        >
          Monthly Summary
        </button>
        <button
          className={`report-tab ${activeTab === 'course' ? 'active' : ''}`}
          onClick={() => setActiveTab('course')}
        >
          Course wise
        </button>
      </div>

      {activeTab === 'monthly' ? renderMonthlySummary() : renderCourseSummary()}
    </div>
  );
}

export default Reports;
