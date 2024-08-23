export interface File {
  id?: string;
  original_filename: string;
  url: string;
  secure_url: string;
  access_mode: string;
  type: string;
  size: number;
  resource_type: string;
  width: number;
  height: number;
  signature: string;
  version_id: string;
  version: number;
  level: number;
  asset_id: string;
  format: string;
  folder_id?: string;
  user_id?: string;
}
