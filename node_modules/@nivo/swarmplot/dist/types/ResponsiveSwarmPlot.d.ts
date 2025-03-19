/// <reference types="react" />
import { SwarmPlotSvgProps } from './types';
type ResponsiveSwarmPlotProps<RawDatum> = Partial<Omit<SwarmPlotSvgProps<RawDatum>, 'data' | 'groups' | 'width' | 'height'>> & Pick<SwarmPlotSvgProps<RawDatum>, 'data' | 'groups'>;
export declare const ResponsiveSwarmPlot: <RawDatum>(props: ResponsiveSwarmPlotProps<RawDatum>) => JSX.Element;
export {};
//# sourceMappingURL=ResponsiveSwarmPlot.d.ts.map