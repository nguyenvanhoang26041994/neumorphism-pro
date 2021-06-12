import React from 'react';
import styled from 'styled-components';
import { Button, Tooltip } from '@fork-ui/components/core';
import VisualSearch from '@fork-ui/components/VisualSearch';
import IndentDecrease from '@fork-ui/components/icons/all/IndentDecrease';
import IndentIncrease from '@fork-ui/components/icons/all/IndentIncrease';
import Search from '@fork-ui/components/icons/all/Search';
import Maximize from '@fork-ui/components/icons/all/Maximize';
import MoonStars from '@fork-ui/components/icons/all/MoonStars';
import Bulb from '@fork-ui/components/icons/all/Bulb';

const TopNavContainer = styled.nav`
  position: sticky;
  top: 0;
  height: 5rem;
  width: 100%;
  z-index: 10;
`;

const TopNavWrapper = styled.div`
  z-index: 10;
  height: 100%;
`;

const MainTopNav = styled.div`
  height: 100%;
  width: 100%;
  background-color: var(--bg);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
`;
const NavRight = styled.div`
  display: flex;
  align-items: center;
`;

const SwitchButton = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--btn-bg);
  border-radius: 999px;
  overflow: hidden;

  .fbtn {
    border-radius: 999px;
    background-color: var(--btn-bg);
    border-color: var(--btn-bg);

    &:hover {
      color: var(--primary);
      background-color: var(--btn-bg);
      border-color: var(--btn-bg);
    }
  }

  .f-selected,
  .f-selected:hover,
  .f-selected:focus {
    color: #fff;
    background-color: var(--primary);
    border-color: var(--primary);
  }
`;
console.log(VisualSearch);
const TopNavigation = ({ toggleExpand, toggleFullScreen, isExpanded, isDark, toggleIsDark, ...otherProps }) => {
  const {
    facets,
    setFacets,
    addFacetAt,
    addFacetToLast,
    removeFacetAt,
    removeLeftFacetAt,
    removeLastFacet,
    removeAllFacet,
  } = VisualSearch.useStore([
    { type: 'Text', props: { value: 'ReactJS'} },
    { type: 'Text', props: { value: 'Angular'} },
    { type: 'Text', props: { value: 'Vue'} },
    { type: 'Text', props: { value: 'JS'} },
  ]);

  const {
    onFacetClose,
    onInputKeyDown,
    onInputBlur,
    mainInputRef,
    visualSearchRef,
    onMainInputKeyDown,
    onMainInputBlur,
    onVisualSearchFocus,
  } = VisualSearch.useHandler({
    facets,
    setFacets,
    addFacetAt,
    addFacetToLast,
    removeFacetAt,
    removeLeftFacetAt,
    removeLastFacet,
    removeAllFacet
  });
  return (
    <TopNavContainer {...otherProps}>
      <TopNavWrapper>
        <MainTopNav>
          <NavLeft>
            <Button
              circle
              color={isExpanded ? 'primary' : 'ghost'}
              icon={isExpanded ? <IndentDecrease /> : <IndentIncrease />}
              onClick={toggleExpand}
            />
            {/* <VisualSearch
              facets={facets}
              onFacetClose={onFacetClose}
              onInputKeyDown={onInputKeyDown}
              onInputBlur={onInputBlur}
              mainInputRef={mainInputRef}
              visualSearchRef={visualSearchRef}
              onMainInputKeyDown={onMainInputKeyDown}
              onMainInputBlur={onMainInputBlur}
              onVisualSearchFocus={onVisualSearchFocus}
            /> */}
          </NavLeft>
          <NavRight>
            <Tooltip title="Toggle Darkmode">
              <Button
                primary={isDark}
                circle
                icon={isDark ? <Bulb /> : <MoonStars />}
                onClick={toggleIsDark}
              />
            </Tooltip>
            <Button circle ghost icon={<Maximize />} onClick={toggleFullScreen} className="ml-2" />
          </NavRight>
        </MainTopNav>
      </TopNavWrapper>
    </TopNavContainer>
  );
};

export default TopNavigation;
