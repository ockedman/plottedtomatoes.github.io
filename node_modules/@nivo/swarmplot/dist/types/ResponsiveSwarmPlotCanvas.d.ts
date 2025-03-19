/// <reference types="react" />
import { SwarmPlotCanvasProps } from './types';
type ResponsiveSwarmPlotCanvasProps<RawDatum> = Partial<Omit<SwarmPlotCanvasProps<RawDatum>, 'data' | 'groups' | 'width' | 'height'>> & Pick<SwarmPlotCanvasProps<RawDatum>, 'data' | 'groups'>;
export declare const ResponsiveSwarmPlotCanvas: <RawDatum>(props: ResponsiveSwarmPlotCanvasProps<RawDatum>) => JSX.Element;
export {};
//# sourceMappingURL=ResponsiveSwarmPlotCanvas.d.ts.map