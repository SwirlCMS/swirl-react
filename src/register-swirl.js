import {Swirl} from './lib'
import {Button} from '@chakra-ui/react'

// Registering a component here will add or edit a component in swirl-cms and its database.
// When a component is registered, it includes the component's name and props.
// Props will be turned into fields in the CMS editor view.

const swirl = new Swirl();
Swirl.register(Button, {
  name: 'Button',
  props: [
    { name: "children", type: 'string', default: 'Button', label: 'Chakra Button' },
    { name: "colorScheme", type: 'string', default: 'blue', label: 'color' }
  ]
})