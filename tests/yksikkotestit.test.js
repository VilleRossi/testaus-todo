import { describe, expect, it } from 'vitest';
import { createTask } from '../public/taskStore.js';

describe('createTask', () => {
  it('creates an incomplete task from form input', () => {
    const task = createTask(
      {
        topic: 'Write a unit test',
        priority: 'high',
        status: 'todo',
        description: 'Check that Vitest runs',
      },
      123,
    );

    expect(task).toMatchObject({
      topic: 'Write a unit test',
      priority: 'high',
      status: 'todo',
      description: 'Check that Vitest runs',
      completed: false,
      createdAt: 123,
      updatedAt: 123,
    });
    expect(task.id).toMatch(/^t_/);
  });
});