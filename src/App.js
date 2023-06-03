import { ProSidebarProvider } from 'react-pro-sidebar';
import { AuthProvider } from "./config";

function App(props) {
  return (
    <ProSidebarProvider>
      <AuthProvider {...props} />
    </ProSidebarProvider>
  );
}

export default App;
