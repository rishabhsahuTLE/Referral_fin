import React, { useState } from 'react';
import { FiDownload, FiX } from 'react-icons/fi';
import './CSVDownloadManager.css';

function CSVDownloadManager() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [columnSelections, setColumnSelections] = useState({
    referrerName: true,
    refereeName: true,
    course: true,
    referralDate: true,
    enrollmentDate: true,
    paymentDate: true,
    docVerificationDate: true,
    bankVerificationDate: true,
    pointOfContactEnrollment: true,
    pointOfContactDocVerification: true,
    pointOfContactBank: true,
    idNumber: true,
  });

  const courses = [
    'All',
    'MBA in Finance',
    'B.Tech CSE',
    'B.Com',
    'B.Sc Data Science',
    'B.Tech AI/ML',
    'B.Tech ECE',
    'M.Tech Electrical',
    'M.Tech Mechatronics',
  ];

  const mockData = [
    {
      id: 1,
      referrerName: 'Rahul Sharma',
      refereeName: 'Aditya Verma',
      course: 'B.Tech CSE',
      referralDate: '2026-05-01',
      enrollmentDate: '2026-05-15',
      paymentDate: '2026-06-15',
      docVerificationDate: '2026-05-20',
      bankVerificationDate: '2026-05-25',
      pocEnrollment: 'Priya Mehta',
      pocDocVerification: 'Raj Kumar',
      pocBank: 'Sneha Patel',
      idNumber: 'REF001',
    },
    {
      id: 2,
      referrerName: 'Sneha Patel',
      refereeName: 'Rajesh Pillai',
      course: 'MBA in Finance',
      referralDate: '2026-04-10',
      enrollmentDate: '2026-04-20',
      paymentDate: '2026-05-20',
      docVerificationDate: '2026-04-25',
      bankVerificationDate: '2026-05-01',
      pocEnrollment: 'Amit Singh',
      pocDocVerification: 'Vikram Singh',
      pocBank: 'Anita Sharma',
      idNumber: 'REF002',
    },
    {
      id: 3,
      referrerName: 'Priya Mehta',
      refereeName: 'Pradeep Nair',
      course: 'B.Com',
      referralDate: '2026-05-05',
      enrollmentDate: '2026-05-15',
      paymentDate: '2026-06-15',
      docVerificationDate: '2026-05-20',
      bankVerificationDate: '2026-05-25',
      pocEnrollment: 'Kavya Iyer',
      pocDocVerification: 'Rohan Desai',
      pocBank: 'Harpreet Kaur',
      idNumber: 'REF003',
    },
    {
      id: 4,
      referrerName: 'Amit Singh',
      refereeName: 'Sarah Khan',
      course: 'B.Sc Data Science',
      referralDate: '2026-05-10',
      enrollmentDate: '2026-05-20',
      paymentDate: '2026-06-20',
      docVerificationDate: '2026-05-25',
      bankVerificationDate: '2026-06-01',
      pocEnrollment: 'Nisha Verma',
      pocDocVerification: 'Arjun Marwai',
      pocBank: 'Deepak Singh',
      idNumber: 'REF004',
    },
    {
      id: 5,
      referrerName: 'Neha Gupta',
      refereeName: 'Vikram Singh',
      course: 'B.Tech AI/ML',
      referralDate: '2026-04-15',
      enrollmentDate: '2026-04-25',
      paymentDate: '2026-05-25',
      docVerificationDate: '2026-05-01',
      bankVerificationDate: '2026-05-05',
      pocEnrollment: 'Sanjana Roy',
      pocDocVerification: 'Manish Patel',
      pocBank: 'Lisa Wong',
      idNumber: 'REF005',
    },
    {
      id: 6,
      referrerName: 'Pradeep Nair',
      refereeName: 'Kavya Iyer',
      course: 'MBA in Finance',
      referralDate: '2026-05-08',
      enrollmentDate: '2026-05-18',
      paymentDate: '2026-06-18',
      docVerificationDate: '2026-05-23',
      bankVerificationDate: '2026-05-28',
      pocEnrollment: 'Bhavna Sharma',
      pocDocVerification: 'Siddharth Gupta',
      pocBank: 'Priya Desai',
      idNumber: 'REF006',
    },
    {
      id: 7,
      referrerName: 'Vikram Singh',
      refereeName: 'Rohan Desai',
      course: 'B.Tech ECE',
      referralDate: '2026-05-12',
      enrollmentDate: '2026-05-22',
      paymentDate: '2026-06-22',
      docVerificationDate: '2026-05-27',
      bankVerificationDate: '2026-06-02',
      pocEnrollment: 'Swati Verma',
      pocDocVerification: 'Ankur Saxena',
      pocBank: 'Monica Sharma',
      idNumber: 'REF007',
    },
    {
      id: 8,
      referrerName: 'Sarah Khan',
      refereeName: 'Nisha Verma',
      course: 'M.Tech Electrical',
      referralDate: '2026-04-20',
      enrollmentDate: '2026-05-01',
      paymentDate: '2026-06-01',
      docVerificationDate: '2026-05-05',
      bankVerificationDate: '2026-05-10',
      pocEnrollment: 'Rajesh Kumar',
      pocDocVerification: 'Sameer Patel',
      pocBank: 'Riya Singh',
      idNumber: 'REF008',
    },
    {
      id: 9,
      referrerName: 'Aditya Verma',
      refereeName: 'Arjun Marwai',
      course: 'M.Tech Mechatronics',
      referralDate: '2026-05-03',
      enrollmentDate: '2026-05-13',
      paymentDate: '2026-06-13',
      docVerificationDate: '2026-05-18',
      bankVerificationDate: '2026-05-23',
      pocEnrollment: 'Deepika Sharma',
      pocDocVerification: 'Vinay Kumar',
      pocBank: 'Anjali Singh',
      idNumber: 'REF009',
    },
    {
      id: 10,
      referrerName: 'Rajesh Pillai',
      refereeName: 'Lisa Wong',
      course: 'B.Com',
      referralDate: '2026-05-07',
      enrollmentDate: '2026-05-17',
      paymentDate: '2026-06-17',
      docVerificationDate: '2026-05-22',
      bankVerificationDate: '2026-05-27',
      pocEnrollment: 'Harpreet Kaur',
      pocDocVerification: 'Manish Verma',
      pocBank: 'Gaurav Singh',
      idNumber: 'REF010',
    },
  ];

  const getFilteredData = () => {
    if (selectedCourse === 'all') {
      return mockData;
    }
    return mockData.filter((item) => item.course === selectedCourse);
  };

  const handleColumnToggle = (columnKey) => {
    setColumnSelections((prev) => ({
      ...prev,
      [columnKey]: !prev[columnKey],
    }));
  };

  const handleDateToggle = () => {
    const allDateSelected =
      columnSelections.referralDate &&
      columnSelections.enrollmentDate &&
      columnSelections.paymentDate &&
      columnSelections.docVerificationDate &&
      columnSelections.bankVerificationDate;

    setColumnSelections((prev) => ({
      ...prev,
      referralDate: !allDateSelected,
      enrollmentDate: !allDateSelected,
      paymentDate: !allDateSelected,
      docVerificationDate: !allDateSelected,
      bankVerificationDate: !allDateSelected,
    }));
  };

  const handlePointOfContactToggle = () => {
    const allPocSelected =
      columnSelections.pointOfContactEnrollment &&
      columnSelections.pointOfContactDocVerification &&
      columnSelections.pointOfContactBank;

    setColumnSelections((prev) => ({
      ...prev,
      pointOfContactEnrollment: !allPocSelected,
      pointOfContactDocVerification: !allPocSelected,
      pointOfContactBank: !allPocSelected,
    }));
  };

  const downloadCSV = () => {
    const filteredData = getFilteredData();
    const headers = [];
    const subHeaders = [];

    // Build headers and sub-headers
    if (columnSelections.referrerName) {
      headers.push('Referrer Name');
      subHeaders.push('');
    }
    if (columnSelections.refereeName) {
      headers.push('Referee Name');
      subHeaders.push('');
    }
    if (columnSelections.course) {
      headers.push('Course');
      subHeaders.push('');
    }

    // Date columns
    const dateColumns = [];
    if (columnSelections.referralDate) dateColumns.push('Referral Date');
    if (columnSelections.enrollmentDate) dateColumns.push('Enrollment Date');
    if (columnSelections.paymentDate) dateColumns.push('Payment Date');
    if (columnSelections.docVerificationDate) dateColumns.push('Doc Verification Date');
    if (columnSelections.bankVerificationDate) dateColumns.push('Bank Verification Date');

    if (dateColumns.length > 0) {
      headers.push('Date');
      subHeaders.push(dateColumns.join(','));
    }

    // Point of Contact columns
    const pocColumns = [];
    if (columnSelections.pointOfContactEnrollment) pocColumns.push('Enrollment');
    if (columnSelections.pointOfContactDocVerification) pocColumns.push('Doc Verification');
    if (columnSelections.pointOfContactBank) pocColumns.push('Bank');

    if (pocColumns.length > 0) {
      headers.push('Point of Contact');
      subHeaders.push(pocColumns.join(','));
    }

    if (columnSelections.idNumber) {
      headers.push('ID/Number');
      subHeaders.push('');
    }

    // Build CSV content
    let csv = headers.join(',') + '\n';
    csv += subHeaders.join(',') + '\n';

    filteredData.forEach((row) => {
      const csvRow = [];

      if (columnSelections.referrerName) csvRow.push(row.referrerName);
      if (columnSelections.refereeName) csvRow.push(row.refereeName);
      if (columnSelections.course) csvRow.push(row.course);

      if (
        columnSelections.referralDate ||
        columnSelections.enrollmentDate ||
        columnSelections.paymentDate ||
        columnSelections.docVerificationDate ||
        columnSelections.bankVerificationDate
      ) {
        const dateValues = [];
        if (columnSelections.referralDate) dateValues.push(row.referralDate);
        if (columnSelections.enrollmentDate) dateValues.push(row.enrollmentDate);
        if (columnSelections.paymentDate) dateValues.push(row.paymentDate);
        if (columnSelections.docVerificationDate) dateValues.push(row.docVerificationDate);
        if (columnSelections.bankVerificationDate) dateValues.push(row.bankVerificationDate);
        csvRow.push(dateValues.join(' | '));
      }

      if (
        columnSelections.pointOfContactEnrollment ||
        columnSelections.pointOfContactDocVerification ||
        columnSelections.pointOfContactBank
      ) {
        const pocValues = [];
        if (columnSelections.pointOfContactEnrollment) pocValues.push(row.pocEnrollment);
        if (columnSelections.pointOfContactDocVerification)
          pocValues.push(row.pocDocVerification);
        if (columnSelections.pointOfContactBank) pocValues.push(row.pocBank);
        csvRow.push(pocValues.join(' | '));
      }

      if (columnSelections.idNumber) csvRow.push(row.idNumber);

      csv += csvRow.join(',') + '\n';
    });

    // Download
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv));
    element.setAttribute('download', `referral-report-${selectedCourse}.csv`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const previewData = getFilteredData().slice(0, 10);

  const getDateColumnsSelected = () => {
    return (
      columnSelections.referralDate ||
      columnSelections.enrollmentDate ||
      columnSelections.paymentDate ||
      columnSelections.docVerificationDate ||
      columnSelections.bankVerificationDate
    );
  };

  const getPocColumnsSelected = () => {
    return (
      columnSelections.pointOfContactEnrollment ||
      columnSelections.pointOfContactDocVerification ||
      columnSelections.pointOfContactBank
    );
  };

  return (
    <div className="csv-download-manager">
      <button
        className="download-report-btn"
        onClick={() => setShowModal(true)}
      >
        <FiDownload size={18} />
        Download Report
      </button>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Download Report</h2>
              <button
                className="close-btn"
                onClick={() => setShowModal(false)}
              >
                <FiX size={24} />
              </button>
            </div>

            <div className="modal-body">
              {/* Course Selector */}
              <div className="course-selector-section">
                <label>Select Course</label>
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value.toLowerCase())}
                  className="course-dropdown"
                >
                  {courses.map((course) => (
                    <option key={course} value={course.toLowerCase()}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>

              {/* Column Selector */}
              <div className="column-selector-section">
                <h3>Select Columns to Export</h3>
                <div className="column-checkboxes">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={columnSelections.referrerName}
                      onChange={() => handleColumnToggle('referrerName')}
                    />
                    Referrer Name
                  </label>

                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={columnSelections.refereeName}
                      onChange={() => handleColumnToggle('refereeName')}
                    />
                    Referee Name
                  </label>

                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={columnSelections.course}
                      onChange={() => handleColumnToggle('course')}
                    />
                    Course
                  </label>

                  {/* Date Master Checkbox */}
                  <label className="checkbox-label master">
                    <input
                      type="checkbox"
                      checked={getDateColumnsSelected()}
                      onChange={handleDateToggle}
                    />
                    Date
                  </label>
                  <div className="sub-checkboxes">
                    <label className="checkbox-label sub">
                      <input
                        type="checkbox"
                        checked={columnSelections.referralDate}
                        onChange={() => handleColumnToggle('referralDate')}
                      />
                      Referral Date
                    </label>
                    <label className="checkbox-label sub">
                      <input
                        type="checkbox"
                        checked={columnSelections.enrollmentDate}
                        onChange={() => handleColumnToggle('enrollmentDate')}
                      />
                      Enrollment Date
                    </label>
                    <label className="checkbox-label sub">
                      <input
                        type="checkbox"
                        checked={columnSelections.paymentDate}
                        onChange={() => handleColumnToggle('paymentDate')}
                      />
                      Payment Date
                    </label>
                    <label className="checkbox-label sub">
                      <input
                        type="checkbox"
                        checked={columnSelections.docVerificationDate}
                        onChange={() => handleColumnToggle('docVerificationDate')}
                      />
                      Doc Verification Date
                    </label>
                    <label className="checkbox-label sub">
                      <input
                        type="checkbox"
                        checked={columnSelections.bankVerificationDate}
                        onChange={() => handleColumnToggle('bankVerificationDate')}
                      />
                      Bank Verification Date
                    </label>
                  </div>

                  {/* Point of Contact Master Checkbox */}
                  <label className="checkbox-label master">
                    <input
                      type="checkbox"
                      checked={getPocColumnsSelected()}
                      onChange={handlePointOfContactToggle}
                    />
                    Point of Contact
                  </label>
                  <div className="sub-checkboxes">
                    <label className="checkbox-label sub">
                      <input
                        type="checkbox"
                        checked={columnSelections.pointOfContactEnrollment}
                        onChange={() => handleColumnToggle('pointOfContactEnrollment')}
                      />
                      Enrollment
                    </label>
                    <label className="checkbox-label sub">
                      <input
                        type="checkbox"
                        checked={columnSelections.pointOfContactDocVerification}
                        onChange={() => handleColumnToggle('pointOfContactDocVerification')}
                      />
                      Doc Verification
                    </label>
                    <label className="checkbox-label sub">
                      <input
                        type="checkbox"
                        checked={columnSelections.pointOfContactBank}
                        onChange={() => handleColumnToggle('pointOfContactBank')}
                      />
                      Bank
                    </label>
                  </div>

                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={columnSelections.idNumber}
                      onChange={() => handleColumnToggle('idNumber')}
                    />
                    ID/Number
                  </label>
                </div>
              </div>

              {/* Data Preview */}
              <div className="preview-section">
                <h3>Data Preview (First 10 rows)</h3>
                <div className="preview-table-wrapper">
                  <table className="preview-table">
                    <thead>
                      <tr>
                        {columnSelections.referrerName && <th>Referrer Name</th>}
                        {columnSelections.refereeName && <th>Referee Name</th>}
                        {columnSelections.course && <th>Course</th>}
                        {getDateColumnsSelected() && (
                          <th colSpan={[
                            columnSelections.referralDate,
                            columnSelections.enrollmentDate,
                            columnSelections.paymentDate,
                            columnSelections.docVerificationDate,
                            columnSelections.bankVerificationDate,
                          ].filter(Boolean).length}>
                            Date
                          </th>
                        )}
                        {getPocColumnsSelected() && (
                          <th colSpan={[
                            columnSelections.pointOfContactEnrollment,
                            columnSelections.pointOfContactDocVerification,
                            columnSelections.pointOfContactBank,
                          ].filter(Boolean).length}>
                            Point of Contact
                          </th>
                        )}
                        {columnSelections.idNumber && <th>ID/Number</th>}
                      </tr>
                      <tr>
                        {getDateColumnsSelected() && (
                          <>
                            {columnSelections.referralDate && <th className="sub-header">Referral Date</th>}
                            {columnSelections.enrollmentDate && <th className="sub-header">Enrollment Date</th>}
                            {columnSelections.paymentDate && <th className="sub-header">Payment Date</th>}
                            {columnSelections.docVerificationDate && <th className="sub-header">Doc Verification</th>}
                            {columnSelections.bankVerificationDate && <th className="sub-header">Bank Verification</th>}
                          </>
                        )}
                        {getPocColumnsSelected() && (
                          <>
                            {columnSelections.pointOfContactEnrollment && <th className="sub-header">Enrollment</th>}
                            {columnSelections.pointOfContactDocVerification && <th className="sub-header">Doc Verification</th>}
                            {columnSelections.pointOfContactBank && <th className="sub-header">Bank</th>}
                          </>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {previewData.map((row) => (
                        <tr key={row.id}>
                          {columnSelections.referrerName && <td>{row.referrerName}</td>}
                          {columnSelections.refereeName && <td>{row.refereeName}</td>}
                          {columnSelections.course && <td>{row.course}</td>}
                          {columnSelections.referralDate && <td>{row.referralDate}</td>}
                          {columnSelections.enrollmentDate && <td>{row.enrollmentDate}</td>}
                          {columnSelections.paymentDate && <td>{row.paymentDate}</td>}
                          {columnSelections.docVerificationDate && <td>{row.docVerificationDate}</td>}
                          {columnSelections.bankVerificationDate && <td>{row.bankVerificationDate}</td>}
                          {columnSelections.pointOfContactEnrollment && <td>{row.pocEnrollment}</td>}
                          {columnSelections.pointOfContactDocVerification && <td>{row.pocDocVerification}</td>}
                          {columnSelections.pointOfContactBank && <td>{row.pocBank}</td>}
                          {columnSelections.idNumber && <td>{row.idNumber}</td>}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="cancel-btn" onClick={() => setShowModal(false)}>
                Cancel
              </button>
              <button className="download-btn" onClick={downloadCSV}>
                <FiDownload size={18} />
                Download CSV
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CSVDownloadManager;
