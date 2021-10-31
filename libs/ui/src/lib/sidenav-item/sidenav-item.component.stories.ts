import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SidenavItemComponent } from './sidenav-item.component';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'SidenavItemComponent',
  component: SidenavItemComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<SidenavItemComponent>;

const Template: Story<SidenavItemComponent> = (args: SidenavItemComponent) => ({
  component: SidenavItemComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    icon:  faCloudSun,
    to:  '',
}
