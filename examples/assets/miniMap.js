import"./web-ifc-api-Df2dhA4n.js";import{S as l}from"./stats.min-GTpOrGrX.js";import{T as b,z as c,m as r}from"./index-DtbylpTq.js";import{C as d,T as p,e as u,m as f,x as g,y as h,a as v,X as x}from"./index-CC2Loeen.js";import"./_commonjsHelpers-Cpj98o6Y.js";const y=document.getElementById("container"),o=new d,k=o.get(p),t=k.create();t.scene=new u(o);t.renderer=new f(o,y);t.camera=new g(o);t.scene.setup();o.init();const w=o.get(h);w.create(t);t.camera.controls.setLookAt(1,2,-2,-2,0,-5);t.scene.three.background=null;const z=new v(o),$=await fetch("https://thatopen.github.io/engine_components/resources/small.frag"),S=await $.arrayBuffer(),T=new Uint8Array(S),B=z.load(T);t.scene.three.add(B);const L=new x(o),n=L.create(t),C=document.getElementById("minimap"),m=n.renderer.domElement;m.style.borderRadius="12px";C.append(m);n.resize();const a=new l;a.showPanel(2);document.body.append(a.dom);a.dom.style.left="0px";a.dom.style.zIndex="unset";t.renderer.onBeforeUpdate.add(()=>a.begin());t.renderer.onAfterUpdate.add(()=>a.end());b.init();const s=n.getSize(),i=c.create(()=>r`
    <bim-panel label="Minimap Tutorial" class="options-menu">
      <bim-panel-section collapsed label="Controls">
      
        <bim-checkbox checked="true" label="Enabled" 
          @change="${({target:e})=>{n.enabled=e.value}}">  
        </bim-checkbox>
        
        <bim-checkbox checked="true" label="Visible" 
          @change="${({target:e})=>{n.config.visible=e.value}}">  
        </bim-checkbox>
        
        <bim-checkbox checked label="Lock rotation" 
          @change="${({target:e})=>{n.config.lockRotation=e.value}}">  
        </bim-checkbox>
        
        <bim-number-input 
          slider label="Zoom" value="${n.zoom}" min="0.01" max="0.5" step="0.01" 
          @change="${({target:e})=>{n.config.zoom=e.value}}">
        </bim-number-input>
        
        <bim-number-input 
          slider label="Front offset" value="${n.frontOffset}" min="0" max="5" step="1" 
          @change="${({target:e})=>{n.config.frontOffset=e.value}}">
        </bim-number-input>
                
        <div style="display: flex; gap: 12px">
        
          <bim-number-input slider value="${s.x}" pref="Size X" min="100" max="500" step="10"              
            @change="${({target:e})=>{n.config.sizeX=e.value}}">
          </bim-number-input>        
        
          <bim-number-input slider value="${s.y}" pref="Size Y" min="100" max="500" step="10"            
            @change="${({target:e})=>{n.config.sizeY=e.value}}">
          </bim-number-input>
        </div>
  
        
      </bim-panel-section>
    </bim-panel>
    `);document.body.append(i);const E=c.create(()=>r`
      <bim-button class="phone-menu-toggler" icon="solar:settings-bold"
        @click="${()=>{i.classList.contains("options-menu-visible")?i.classList.remove("options-menu-visible"):i.classList.add("options-menu-visible")}}">
      </bim-button>
    `);document.body.append(E);
