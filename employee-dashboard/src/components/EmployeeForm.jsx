import React, { useState } from 'react';

function EmployeeForm() {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    location: '',
    salary: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Field validation
    if (!formData.name || !formData.designation || !formData.location || !formData.salary) {
      alert('Please fill out all fields.');
      return;
    }

    if (Number(formData.salary) <= 0) {
      alert('Salary must be a positive number.');
      return;
    }

    // Success response
    setMessage(`Employee "${formData.name}" added successfully!`);

    // Reset form fields
    setFormData({
      name: '',
      designation: '',
      location: '',
      salary: '',
    });
  };

  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-8 col-lg-6">
        <div className="card shadow-sm">
          <div className="card-header bg-primary text-white">
            <h4 className="mb-0 text-center">Employee Form</h4>
          </div>
          <div className="card-body p-4">
            {message && (
              <div className="alert alert-success alert-dismissible fade show" role="alert">
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter employee name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Designation</label>
                <input
                  type="text"
                  className="form-control"
                  name="designation"
                  placeholder="e.g. Developer, Designer, Manager"
                  value={formData.designation}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Location</label>
                <input
                  type="text"
                  className="form-control"
                  name="location"
                  placeholder="e.g. Bangalore, Kochi, Remote"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Salary</label>
                <input
                  type="number"
                  className="form-control"
                  name="salary"
                  placeholder="Enter salary"
                  value={formData.salary}
                  onChange={handleChange}
                  min="1"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100 py-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeForm;
