import { getClientIp } from 'request-ip';

export const logMiddleware = async (req, res, next) => {
  const ipAddress = getClientIp(req);
  const method = req.method;
  console.log(
    `> ${new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
    }).format(new Date())} :: ${method} ${ipAddress} `,
  );

  next();
};
