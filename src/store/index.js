import pinia from './pinia';

import { useTabStore } from './tag';
import { useUserStore } from './user';

// 这里实际上不需要显式注册每个模块，因为 Pinia 会自动发现并注册
// 但如果你有额外的配置需要在注册时处理，可以这样做
pinia.use(useTabStore);
pinia.use(useUserStore);

export { useTabStore, useUserStore };
