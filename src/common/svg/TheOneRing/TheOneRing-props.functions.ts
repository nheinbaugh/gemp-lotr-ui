import { TheOneRingProps } from "./TheOneRing-props.interface";

export const defaultOneRingProps = (input: Partial<TheOneRingProps> = {}): TheOneRingProps => ({
    height: 2500,
    width: 2500,
    classes: '',
    ...input
})