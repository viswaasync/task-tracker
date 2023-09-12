import "./home.scss";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import axios from 'axios';

const schema = z.object({
  task_category_code: z.enum(['Lab Work', 'Data Curation', 'Data Analysis', 'Development']).optional(),
  task_date_time: z.date().optional(),
  week_number: z.number().min(1).max(54).optional(),
  order_name: z.number().min(1).optional(),
  task_desc: z.string().optional(),
  comments: z.string().optional(),
  proj_name: z.enum(['PROBIO', 'PSFF', 'iPCM', 'ALASCCA']).optional(),
  first_name: z.enum(['Test']).optional(),
  status: z.enum(['Done', 'In Progress']).optional(),
});

const Home = () => {
  const { handleSubmit, control, formState: { errors }, setError } = useForm();

  const onSubmit = async (data) => {
    try {
      
      data.week_number = parseFloat(data.week_number);
      data.order_name = parseFloat(data.order_name);

      const requestData = {
        taskCategoryCode: data.task_category_code,
        taskDateTime: data.task_date_time,
        weekNumber: data.week_number,
        orderName: data.order_name,
        taskDesc: data.task_desc,
        comments: data.comments,
        projId: data.proj_name, 
        userId: data.first_name, 
      };
      const response = await axios.post('http://localhost:5050/createTask', requestData);
      if (response.status === 204) {
        console.log('Task created successfully!');
      } else {
        console.error('Failed to create task.');
      }
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <div className="form-container">
      <h1> Create Task</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
          <label>Category</label>
          <Controller
            name="task_category_code"
            control={control}
            render={({ field }) => (
              <select {...field} required>
                <option value="">Select Category</option>                
                <option value="Lab Work">Lab Work</option>
                <option value="Data Curation">Data Curation</option>
                <option value="Data Analysis">Data Analysis</option>
                <option value="Development">Development</option>
              </select>
            )}
          />
          {errors.task_category_code && <span className="error-message">{errors.task_category_code.message}</span>}
        </div>
        <div className="form-group">
          <label>Date</label>
          <Controller
            name="task_date_time"
            control={control}
            render={({ field }) => (
              <input type="date" {...field} />
            )}
          />
          {errors.task_date_time && <span className="error-message">{errors.task_date_time.message}</span>}
        </div>
        <div className="form-group">
          <label>Week Number</label>
          <Controller
            name="week_number"
            control={control}
            render={({ field }) => (
              <input type="number" {...field} />
            )}
          />
          {errors.week_number && <span className="error-message">{errors.week_number.message}</span>}
        </div>
        <div className="form-group">
          <label>Order Number</label>
          <Controller
            name="order_name"
            control={control}
            render={({ field }) => (
              <input type="number" {...field} />
            )}
          />
          {errors.order_name && <span className="error-message">{errors.order_name.message}</span>}
        </div>
        <div className="form-group">
          <label>Description</label>
          <Controller
            name="task_desc"
            control={control}
            render={({ field }) => (
              <textarea {...field} />
            )}
          />
          {errors.task_desc && <span className="error-message">{errors.task_desc.message}</span>}
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
          {errors.comments && <span className="error-message">{errors.comments.message}</span>}
        </div>
        <div className="form-group">
          <label>Project</label>
          <Controller
            name="proj_name"
            control={control}
            render={({ field }) => (
              <select {...field} required>
                <option value="">Select Project Name</option>
                <option value="PROBIO">PROBIO</option>
                <option value="PSFF">PSFF</option>
                <option value="iPCM">iPCM</option>
                <option value="ALASCCA">ALASCCA</option>
              </select>
            )}
          />
          {errors.proj_name && <span className="error-message">{errors.proj_name.message}</span>}
        </div>
        <div className="form-group">
          <label>Name</label>
          <Controller
            name="first_name"
            control={control}
            render={({ field }) => (
              <select {...field} required>
                <option value="">Select Name</option>
                <option value="Test">Test</option>
                {/* <option value="2">Sarath</option>
                <option value="3">Venki</option>
                <option value="4">Johan</option>
                <option value="5">Anu</option>
                <option value="6">Preeti</option>
                <option value="7">Nawal</option>
                <option value="8">Markus</option>
                <option value="9">Rebecka</option> */}
              </select>
            )}
          />
          {errors.first_name && <span className="error-message">{errors.first_name.message}</span>}
        </div>
        {/* <div className="form-group">
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
        </div> */}

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Home;