import { GA4React } from "ga-4-react";

import React from 'react';

import ReactGA from 'react-ga';

export interface AnalyticsData {
  path: string;
  search: string;
  title: string;
}

export interface EventData {
  Category: string;
  Action: string;
  Label: string;
}

const Trackpathforanalytics = async (data: AnalyticsData) => {
  const { path, search, title } = data;
  try {
    const ga4react = await new GA4React("G-YBR7CRY471").initialize();
    if(ga4react){

      const ga = await ga4react.gtag();
      
      ReactGA.set({ userId: 'testing011' });
      
      
      ga.pageview(path, search, title);
    }
  } catch (err) {
    console.error(`Analytics failed: ${err}`);
  }
};
const trackButtonclick = async (data: EventData) => {
  const { Category, Action, Label } = data;
  try {
    const ga4react = await new GA4React("G-YBR7CRY471").initialize();
    const ga = await ga4react.gtag();
    return ga.event(Category, Action, Label); // Return the tracking result
  } catch (err) {
    console.error(`Analytics failed: ${err}`);
    throw err; // Rethrow the error to handle it elsewhere if needed
  }
};
export { Trackpathforanalytics, trackButtonclick };
