import React from 'react';
import { createRoot} from 'react-dom/client';

import SidePanel from './SidePanel';
import './SidePanel.css'

const container = document.getElementById('app-container')
const root = createRoot(container); // createRoot(container!) if using TypeScript

root.render(<SidePanel />)