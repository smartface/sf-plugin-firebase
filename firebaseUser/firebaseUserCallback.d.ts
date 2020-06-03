import FirebaseAuthError from "../firebaseAuth/firebaseAuthErrors";
import FirebaseUser from ".";

export = FirebaseUserCallback;

type FirebaseUserErrorBody = {
    code: typeof FirebaseAuthError;
    description: string;
}

declare function FirebaseUserCallback (FirebaseUser: FirebaseUser, options: { 
    error: FirebaseUserErrorBody, 
    isSuccess?: boolean, 
    email?: string, 
    token?: string 
}):  void;
