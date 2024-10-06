const availableModels: {
  modelId: Model;
  label: string;
  supportMediaType: string[];
}[] = [
  {
    modelId: 'claude-v3-haiku',
    label: 'Claude 3 (Haiku)',   // Only this model will remain
    supportMediaType: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  }
];
