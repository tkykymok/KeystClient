export const MessageType = {
  Success: { name: 'success' },
  Warning: { name: 'warning' },
  Danger: { name: 'danger' },
  Info: { name: 'info' },
} as const;

type MessageType = typeof MessageType[keyof typeof MessageType];

