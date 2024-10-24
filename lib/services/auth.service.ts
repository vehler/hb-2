import { toast } from "@/hooks/use-toast";

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials extends AuthCredentials {
  name: string;
}

export const login = async (credentials: AuthCredentials): Promise<boolean> => {
  try {
    // Mock successful login
    toast({
      title: "Success",
      description: "Logged in successfully",
    });
    return true;
  } catch (error) {
    toast({
      title: "Error",
      description: "Invalid credentials",
      variant: "destructive",
    });
    return false;
  }
};

export const register = async (credentials: RegisterCredentials): Promise<boolean> => {
  try {
    // Mock successful registration
    toast({
      title: "Success",
      description: "Account created successfully",
    });
    return true;
  } catch (error) {
    toast({
      title: "Error",
      description: "Registration failed",
      variant: "destructive",
    });
    return false;
  }
};

export const logout = async (): Promise<void> => {
  // Mock logout
  toast({
    title: "Success",
    description: "Logged out successfully",
  });
};