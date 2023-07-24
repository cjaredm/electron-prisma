import React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import { H2, Badge } from '../../components';

export default function BadgePage() {
  return (
    <div>
      <H2>Badge</H2>

      <Badge badgeContent={4} color="primary">
        <MailIcon color="action" />
      </Badge>
    </div>
  );
}
