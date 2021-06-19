import { SERVER } from '@/utils/constants';
import { server } from './application';

(async () => {
  server.listen(SERVER.PORT, () => {
    console.log(`Server running on port ${SERVER.PORT}`);
  })
})()