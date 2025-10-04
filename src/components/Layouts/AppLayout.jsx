

import { Headers } from "../../UI/Headers";
export const AppLayout = ({ children }) => {
    return (
        <div className="app-container">
        
            <Headers/>
        
            
            <main className="content-wrapper">
                
                {children} 
            </main>
            
            
        </div>
    );
};