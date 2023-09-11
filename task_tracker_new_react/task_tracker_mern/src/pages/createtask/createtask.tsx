import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(3).max(50).optional(),
  project: z.enum(['Project A', 'Project B', 'Project C']).optional(),
  category: z.enum(['Category X', 'Category Y', 'Category Z']).optional(),
  createdAt: z.date().optional(),
  comments: z.string().optional(),
  status: z.enum(['Done', 'In Progress']).optional(),
  orderNumber: z.number().min(1).optional(),
});

const createtask = () => {
  const { handleSubmit, control, formState: { errors }, setError } = useForm();

  const onSubmit = (data) => {
    try {
      // Manually parse createdAt as a Date object
      data.createdAt = new Date(data.createdAt);
      // Manually parse orderNumber as a number
      data.orderNumber = parseFloat(data.orderNumber);

      const parsedData = schema.parse(data);
      // Data is valid, you can submit it here
      console.log(parsedData);
    } catch (error) {
      console.error(error);

      // Set errors for the specific fields
      if (error.errors) {
        error.errors.forEach((err) => {
          setError(err.path[0], { type: 'manual', message: err.message });
        });
      }
    }
  };

  return (
    <div>
      <h1> Create Task</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <input {...field} />
            )}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label>Project</label>
          <Controller
            name="project"
            control={control}
            render={({ field }) => (
              <select {...field}>
                <option value="Project A">Project A</option>
                <option value="Project B">Project B</option>
                <option value="Project C">Project C</option>
              </select>
            )}
          />
          {errors.project && <span>{errors.project.message}</span>}
        </div>
        <div>
          <label>Category</label>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <select {...field}>
                <option value="Category X">Category X</option>
                <option value="Category Y">Category Y</option>
                <option value="Category Z">Category Z</option>
              </select>
            )}
          />
          {errors.category && <span>{errors.category.message}</span>}
        </div>
        <div>
          <label>Created At</label>
          <Controller
            name="createdAt"
            control={control}
            render={({ field }) => (
              <input type="date" {...field} />
            )}
          />
          {errors.createdAt && <span>{errors.createdAt.message}</span>}
        </div>
        <div>
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
        <div>
          <label>Status</label>
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <select {...field}>
                <option value="Done">Done</option>
                <option value="In Progress">In Progress</option>
              </select>
            )}
          />
          {errors.status && <span>{errors.status.message}</span>}
        </div>
        <div>
          <label>Order Number</label>
          <Controller
            name="orderNumber"
            control={control}
            render={({ field }) => (
              <input type="number" {...field} />
            )}
          />
          {errors.orderNumber && <span>{errors.orderNumber.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default createtask;