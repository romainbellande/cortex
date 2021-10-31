import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SearchbarComponent } from './searchbar.component';

export default {
  title: 'SearchbarComponent',
  component: SearchbarComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<SearchbarComponent>;

const Template: Story<SearchbarComponent> = (args: SearchbarComponent) => ({
  component: SearchbarComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}