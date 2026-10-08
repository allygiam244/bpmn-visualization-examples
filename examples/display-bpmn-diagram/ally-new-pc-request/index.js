const bpmnVisualization = new bpmnvisu.BpmnVisualization({ container: 'bpmn-container', navigation: { enabled: true } });
bpmnVisualization.load(getAllyNewPcRequestDiagram(), { fit: { type: bpmnvisu.FitType.Center, margin: 20 } });

// Highlight the human tasks that require an authorization decision
const authorizationTaskIds = ['Task_Valuta', 'Task_Budget'];
bpmnVisualization.bpmnElementsRegistry.addOverlays('Task_Valuta', { position: 'top-right', label: '1', style: { fill: { color: '#ffd166' }, stroke: { color: '#b07d00' } } });
bpmnVisualization.bpmnElementsRegistry.addOverlays('Task_Budget', { position: 'top-right', label: '2', style: { fill: { color: '#ffd166' }, stroke: { color: '#b07d00' } } });

// Show the actor in charge of each activity in a native tooltip
const lanesById = new Map(
    bpmnVisualization.bpmnElementsRegistry.getElementsByKinds(bpmnvisu.ShapeBpmnElementKind.LANE)
        .map(lane => [lane.bpmnSemantic.id, lane.bpmnSemantic.name]));
bpmnVisualization.bpmnElementsRegistry.getElementsByKinds(bpmnvisu.ShapeUtil.flowNodeKinds())
    .forEach(element => {
        const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        const lane = lanesById.get(element.bpmnSemantic.parentId);
        const isAuthorization = authorizationTaskIds.includes(element.bpmnSemantic.id);
        title.textContent = `${element.bpmnSemantic.name || element.bpmnSemantic.kind}${lane ? `\nResponsabile: ${lane}` : ''}${isAuthorization ? '\nPunto di autorizzazione' : ''}`;
        element.htmlElement.appendChild(title);
    });
