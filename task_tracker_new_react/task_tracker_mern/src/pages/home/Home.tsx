import "./home.scss";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  name: z.enum(['Johan','Preeti','Markus','Rebecka','Venki','Nawal', 'Sarath', 'Karthick', 'Anu']).optional(),
  project: z.enum(['Probio', 'CRCR', 'PSFF', 'IPCM']).optional(),
  category: z.enum(['Lab Work', 'Data Curation', 'Data Analysis']).optional(),
  createdAt: z.date().optional(),
  description: z.string().optional(),
  comments: z.string().optional(),
  status: z.enum(['Done', 'In Progress']).optional(),
  orderNumber: z.number().min(1).optional(),
});

const Home = () => {
  const { handleSubmit, control, formState: { errors }, setError } = useForm();

  const onSubmit = (data) => {
    try {
      data.createdAt = new Date(data.createdAt);
      data.orderNumber = parseFloat(data.orderNumber);
      const parsedData = schema.parse(data);
      console.log(parsedData);
    } catch (error) {
      console.error(error);
      if (error.errors) {
        error.errors.forEach((err) => {
          setError(err.path[0], { type: 'manual', message: err.message });
        });
      }
    }
  };

  return (
    <div className="form-container">
      <h1> Create Task</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
          <label>Name</label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <select {...field} required>
                <option value="">Select Name</option>
                <option value="Karthick">Karthick</option>
                <option value="Sarath">Sarath</option>
                <option value="Venki">Venki</option>
                <option value="Johan">Johan</option>
                <option value="Anu">Anu</option>
                <option value="Preeti">Preeti</option>
                <option value="Nawal">Nawal</option>
                <option value="Markus">Markus</option>
                <option value="Rebecka">Rebecka</option>
              </select>
            )}
          />
          {errors.project && <span className="error-message">{errors.project.message}</span>}
        </div>
        <div className="form-group">
          <label>Project</label>
          <Controller
            name="project"
            control={control}
            render={({ field }) => (
              <select {...field} required>
                <option value="">Select Project Name</option>
                <option value="Probio">Probio</option>
                <option value="CRCR">CRCR</option>
                <option value="PSFF">PSFF</option>
                <option value="IPCM">IPCM Analysis</option>
              </select>
            )}
          />
          {errors.project && <span className="error-message">{errors.project.message}</span>}
        </div>
        <div className="form-group">
          <label>Category</label>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <select {...field} required>
                <option value="">Select Category</option>                
                <option value="Lab Work">Lab Work</option>
                <option value="Data Curation">Data Curation</option>
                <option value="Data Analysis">Data Analysis</option>
              </select>
            )}
          />
          {errors.category && <span className="error-message">{errors.category.message}</span>}
        </div>
        <div className="form-group">
          <label>Created At</label>
          <Controller
            name="createdAt"
            control={control}
            render={({ field }) => (
              <input type="date" {...field} />
            )}
          />
          {errors.createdAt && <span className="error-message">{errors.createdAt.message}</span>}
        </div>
        <div className="form-group">
          <label>Description</label>
          <Controller
            name="Task Description"
            control={control}
            render={({ field }) => (
              <textarea {...field} />
            )}
          />
          {errors.comments && <span className="error-message">{errors.comments.message}</span>}
        </div>
        <div className="form-group">
          <label>Comments</label>
          <Controller
            name="comments"
            control={control}
            render={({ field }) => (
              <textarea {...field} />
            )}
          />
          {errors.comments && <span>{errors.comments.message}</span>}
        </div>
        <div className="form-group">
          <label>Status</label>
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <select {...field} required>
                <option value="">Select Status</option>                
                <option value="Done">Done</option>
                <option value="In Progress">In Progress</option>
              </select>
            )}
          />
          {errors.status && <span className="error-message">{errors.status.message}</span>}
        </div>
        <div className="form-group">
          <label>Order Number</label>
          <Controller
            name="orderNumber"
            control={control}
            render={({ field }) => (
              <input type="number" {...field} />
            )}
          />
          {errors.orderNumber && <span className="error-message">{errors.orderNumber.message}</span>}
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Home;