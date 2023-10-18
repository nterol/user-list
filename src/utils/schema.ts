import { z } from 'zod';

const group = z.enum(['QA Tester', 'Manager', 'Intern']);
const access = z.enum(['django', 'orange-money', 'zebra', 'nomad']);

export const user = z.object({
  createdAt: z.string().datetime(),
  name: z.string(),
  avatar: z.string().url(),
  email: z.string(),
  groups: z.array(group),
  access: z.array(access),
  id: z.string(),
  last_login: z.number(),
  query: z.string().optional(),
});

export const userList = z.array(user);

export type User = z.infer<typeof user>;
