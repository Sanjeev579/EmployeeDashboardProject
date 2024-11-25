export interface Avatar {
  name: string;   // The name of the avatar
  imageUrl: string; // The URL or path to the avatar image
}

export interface Employee {
  id?: number; // Optional for new employees
  name: string;
  companyName: string;
  emailId: string;
  contactNo: string;
  designation: string;
  avatar: Avatar; // Updated to be an object with name and imageUrl
}