import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blogs = () => {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>What is CORS?</Accordion.Header>
                <Accordion.Body>
                    Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Why are we using firebase? What other options do we have to implement authentication?</Accordion.Header>
                <Accordion.Body>
                    The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. <br />
                    Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="2">
                <Accordion.Header>How does the private Route work?</Accordion.Header>
                <Accordion.Body>
                    The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                </Accordion.Body>
            </Accordion.Item>



            <Accordion.Item eventKey="3">
                <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                <Accordion.Body>
                    Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. <br />
                    It is used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Blogs;