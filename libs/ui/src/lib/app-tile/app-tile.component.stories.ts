import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AppTileComponent } from './app-tile.component';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'AppTileComponent',
  component: AppTileComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<AppTileComponent>;

const Template: Story<AppTileComponent> = (args: AppTileComponent) => ({
  component: AppTileComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    title:  '',
    description:  '',
    icon: faCloudSun,
    to:  '',
}
