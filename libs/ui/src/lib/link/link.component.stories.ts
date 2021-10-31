import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { LinkComponent } from './link.component';

export default {
  title: 'LinkComponent',
  component: LinkComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<LinkComponent>;

const Template: Story<LinkComponent> = (args: LinkComponent) => ({
  component: LinkComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    to:  '',
}