import React from 'react';
import styled from 'styled-components';
import Section from '../Section/Section';

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        bgImage="red-tesla-model-x.jpg"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        bgImage="teslaY.jpg"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        bgImage="model3.jpg"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        bgImage="modelX2.jpg"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
      />
      <Section
        title="Solor Panels"
        description="Lowest Cost Solar Panels in America"
        bgImage="solorx.jpg"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
      />
      <Section
        title="Accessories"
        bgImage="tai-nghe-beats-x.jpg"
        leftBtnText="custom order"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
