// Extend styles for buttons that use flex layout
// const commonFlexButton: React.CSSProperties = {
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   gap: '8px',
//   padding: '12px 24px',
//   fontSize: '1rem',
// };

// Common container style (shared margin and width for multiple containers)
const commonContainer: React.CSSProperties = {

};

// Common div style (shared by divHead and divContent)
const commonDiv: React.CSSProperties = {
  textAlign: 'left',
};

// Extract common base button styles
export const commonButton: React.CSSProperties = {
  border: 'none',
  borderRadius: '8px',
  fontWeight: 600,
  cursor: 'pointer',
  color: 'rgba(255, 255, 255, 1)',
  padding: '16px 25px',
  fontSize: '1.25rem',
  height: '2.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '16px',
};

export const headerStyle: React.CSSProperties = {
  justifyContent: 'center',
  alignItems: 'center',
  width: '80%',
  // height: '370px',
  height: 'auto',
  // background: 'linear-gradient(135deg, rgba(68, 183, 204, 0.5) 0%, rgba(68, 183, 204, 0.8) 100%)',
  background: '#ffffff',
};

export const GistVis: React.CSSProperties = {
  margin: '3rem 0 1.2rem 0',
  // color: 'rgba(48, 176, 199, 1)',
  // color: '#d6e4ff',
  fontSize: '3.5em',
  fontWeight: 'bold',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  textAlign: 'center',
};

export const titleContent: React.CSSProperties = {
  margin: '0.5rem 0 0.5rem 0',
  // color: '#f0f5ff',
  fontSize: '1.5rem',
  // fontWeight: 'bold',
  fontStyle: 'italic',
  lineHeight: 1.4,
  textAlign: 'center',
};

export const authors: React.CSSProperties = {
  marginTop: '0',
  marginBottom: '0',
  // color: 'rgba(230,244,241,1)',
  fontSize: '1.2rem',
  // fontWeight: 'bold',
  lineHeight: 1.4,
  textAlign: 'center',
};

export const buttonContainer: React.CSSProperties = {
  marginTop: '1rem',
  width: '100%',
  maxWidth: '600px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  gap: '30px',
};

// // Inherit common button styles
// export const buttonOpen: React.CSSProperties = {
//   ...commonButton,
//   color: 'rgba(255, 255, 255, 1)',
//   padding: '16px 40px',
//   fontSize: '1.5rem',
//   height: '4rem',
// };

export const bottomButtonRow: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '300px',
};

// // For buttons with flex layout (Pdf and Github), inherit both common button and common flex styles
// export const buttonPdf: React.CSSProperties = {
//   ...commonButton,
//   ...commonFlexButton,
//   color: 'rgba(255, 255, 255, 1)',
// };

// export const buttonGithub: React.CSSProperties = {
//   ...commonButton,
//   ...commonFlexButton,
//   color: 'rgba(255, 255, 255, 1)',
// };

export const introductionContent: React.CSSProperties = {
  margin: '1.5rem 0',
  maxWidth: '1350px',
  fontSize: '16px',
  lineHeight: '1.6',
  color: 'rgba(51, 51, 51, 1)',
  textAlign: 'justify',
  padding: '0 2rem',
  fontFamily: "'Open Sans', sans-serif",
};

// Inherit common div style and extend with specific attributes
export const divHead: React.CSSProperties = {
  ...commonDiv,
  fontSize: '32px',
};

export const divContent: React.CSSProperties = {
  ...commonDiv,
  fontSize: '15px',
  color: 'rgb(142, 141, 141)',
};

// Containers that inherit common container styles
export const overviewContainer: React.CSSProperties = {
  ...commonContainer,
};

export const buttonYtb = {
  padding: '8px 12px',
  fontSize: '1rem',
  backgroundColor: '#FFFFFF',
  color: '#FF0000',
  borderRadius: '4px',
  cursor: 'pointer',
  margin: 'auto 0',
};

export const overviewVideo: React.CSSProperties = {
  alignSelf: 'center',
  width: '75%',
  maxWidth: '90em'
};

export const pipelineContainer: React.CSSProperties = {
  ...commonContainer,
};

export const stepsContainer: React.CSSProperties = {
  marginTop: '1rem',
  width: '100%',
  paddingBottom: '50px',
};

export const buttonPrevious: React.CSSProperties = {
  position: 'absolute',
  bottom: '0',
  left: '0',
};

export const buttonNext: React.CSSProperties = {
  position: 'absolute',
  bottom: '0',
  right: '0',
};

export const visContainer: React.CSSProperties = {
  ...commonContainer,
};

export const sampleContainer: React.CSSProperties = {
  background: '#ffffff',
  borderRadius: '5px',
};

export const bibtexContainer: React.CSSProperties = {
  ...commonContainer,
};

export const bibtexCardContainer: React.CSSProperties = {
  width: '100%',
  maxWidth: 1100,
  margin: '20px auto',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  borderRadius: '10px',
  backgroundColor: '#ffffff',
};

export const bibtexCardHeader: React.CSSProperties = {
  margin: 0,
  color: '#007acc',
};

export const bibtexCardExtraButton: React.CSSProperties = {
  borderRadius: '6px',
  backgroundColor: '#007acc',
  color: '#fff',
  fontWeight: 'bold',
  border: 'none',
};

export const bibtexPreStyle: React.CSSProperties = {
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
  background: '#282C34',
  padding: '20px',
  borderRadius: '8px',
  fontSize: '15px',
  fontFamily: 'Consolas, "Courier New", monospace',
  color: '#AB9EAB',
  margin: 0,
};
