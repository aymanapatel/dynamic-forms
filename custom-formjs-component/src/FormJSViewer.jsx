import React, { useEffect } from 'react';
import { Form } from '@bpmn-io/form-js';
import '@bpmn-io/form-js/dist/assets/form-js.css';

import formViewerSchema from './schema.json';
import RangeExtension from './extensions';



const form = new Form({additionalModules: [RangeExtension]});

export default function FormJSViewer() {


  /* Load formViewer */
  useEffect(() => {
    async function getFormSchema() {
      await form.importSchema(formViewerSchema);
      form.attachTo('#form');
    }
    getFormSchema();
    /**
     * Another form kept on appending if I didn't cleanup
     * in useEffect...
     */
    return () => {
      form.detach();
    //   form.destroy();
    };
  }, []);

  useEffect(() => {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    form.on('submit', (event ) => {

    console.log('Form submit data - ', event);
    });

    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    form.on('changed', (event ) => {
      console.log('Form change data - ', event);
      // dispatch(updateFormData(event.data))
      });
  }, [form]);

  return (   
    <>
    <h1>fsds</h1>
        <div id="form" />

    </>
  );
}