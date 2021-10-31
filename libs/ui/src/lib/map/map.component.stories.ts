import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MapComponent } from './map.component';

export default {
  title: 'MapComponent',
  component: MapComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<MapComponent>;

const Template: Story<MapComponent> = (args: MapComponent) => ({
  component: MapComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    ref:  '',
}